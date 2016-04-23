import {DomEventsPlugin} from 'angular2/platform/common_dom';
// Have to pull DOM from src because platform/common_dom returns DOM as null.
// I believe its a TS bug.
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Injectable} from 'angular2/core';

@Injectable()
export class MultiEventPlugin extends DomEventsPlugin {
  getMultiEventArray(eventName: string): string[] {
    return eventName.split(',').map((item) => { return item.trim() });
  }

  supports(eventName: string): boolean {
    return eventName.split("").indexOf(',') > -1;
  }

  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    var zone = this.manager.getZone();
    var eventsArray = this.getMultiEventArray(eventName);

    // Entering back into angular to trigger changeDetection
    var outsideHandler = (event) => {
        zone.run(() => handler(event))
    };

    // Executed outside of angular so that change detection is not constantly triggered.
    var addAndRemoveHostListenersForOutsideEvents = () => {
      eventsArray.forEach((singleEventName: string) => {
        this.manager.addEventListener(element, singleEventName, outsideHandler);
      });
    }

    return this.manager.getZone().runOutsideAngular(addAndRemoveHostListenersForOutsideEvents);
  }

  addGlobalEventListener(target: string, eventName: string, handler: Function): Function {
    var zone = this.manager.getZone();
    var eventsArray = this.getMultiEventArray(eventName);
    var outsideHandler = (event) => zone.run(() => handler(event));

    return this.manager.getZone().runOutsideAngular(() => {
      eventsArray.forEach((singleEventName: string) => {
        this.manager.addGlobalEventListener(target, singleEventName, outsideHandler);
      })
    });
  }
}

