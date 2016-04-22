import {DomEventsPlugin} from 'angular2/platform/common_dom';
// Have to pull DOM from src because platform/common_dom returns DOM as null.
// I believe its a TS bug.
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Injectable} from 'angular2/core';
import {noop} from 'angular2/src/facade/lang';

@Injectable()
export class DOMOutsideEventPlugin extends DomEventsPlugin {
  eventMap: Object = {
    "clickOutside": "click",
    "mousedownOutside": "mousedown",
    "mouseupOutside": "mouseup",
    "mousemoveOutside": "mousemove"
  }
  supports(eventName: string): boolean {
    return this.eventMap.hasOwnProperty(eventName);
  }

  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    var zone = this.manager.getZone();
    var documentEvent = this.eventMap[eventName];

    // Entering back into angular to trigger changeDetection
    var outsideHandler = (event) => {
        zone.run(() => handler(event))
    };

    // Executed outside of angular so that change detection is not constantly triggered.
    var addAndRemoveHostListenersForOutsideEvents = () => {
      DOM.onAndCancel(DOM.getGlobalEventTarget('document'), documentEvent,
        (event) => {
          let current = event.target;
          // if the element/event is propagating from the element its bound to, don't handle it.
          if (current.parentNode && current !== element) {
              outsideHandler(event);
        }
      });
    }
    return this.manager.getZone().runOutsideAngular(addAndRemoveHostListenersForOutsideEvents);
  }

  addGlobalEventListener(target: string, eventName: string, handler: Function): Function {
    var element = DOM.getGlobalEventTarget(target);
    var zone = this.manager.getZone();
    var outsideHandler = (event) => zone.run(() => handler(event));

    if ((target === "document") || (target === "window" )) {
      return noop;
    }
    return this.manager.getZone().runOutsideAngular(
        () => DOM.onAndCancel(element, eventName, outsideHandler)
    );
  }
}

