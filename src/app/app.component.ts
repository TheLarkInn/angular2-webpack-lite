import {Component} from 'angular2/core';
import {AppState} from './app_state.service.ts';

@Component({
	selector: 'app',
	pipes: [],
	providers: [],
	directives: [],
	styles: [],
	template: `
    <div>
      <div>OUTSIDE OF HEADER</div>
      <h1 (clickOutside)='clickedOutsideHeader($event)' (click)='handleClick($event)' style='border: 1px black solid; display: inline;'>Hello World</h1>
    </div>
  `
})
export class App {
	onLoadWelcomeMessage: string = `Hello ngConf! I'm logging on ngOnInit()`;
	name: string = 'Angular2 Webpack Lite';

	constructor(public appState: AppState) {}

  clickedOutsideHeader(event) {
    console.log('CLICKED OUTSIDE OF HEADER ON THIS ELEMENT:', event.target);
  }

  handleClick(event) {
    console.log("Regular click")
  }

  handleClickOutisde(event) {
    console.log("handleClickOutside", event);
  }

	ngOnInit() {
		console.log(this.onLoadWelcomeMessage);
	}
}
