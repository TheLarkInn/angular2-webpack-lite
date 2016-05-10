import {Component} from '@angular/core';
import {NgFor, AsyncPipe} from '@angular/common';
import {AppState} from './app_state.service.ts';
import {Observable} from 'rxjs';


@Component({
	selector: 'app',
	pipes: [AsyncPipe],
	providers: [],
	directives: [NgFor],
	styles: [],
	template: `
    <div>Hello World</div>
    <h1>Data Below</h1>
    <ul>
      <li></li>
    </ul>
  `
})
export class App {
  public data: any;
	onLoadWelcomeMessage: string = `Hello ngConf! I'm logging on ngOnInit()`;
	name: string = 'Angular2 Webpack Lite';

	constructor(public appState: AppState) {
    this.appState.getJsonData().subscribe(
      (data) => {debugger},
      (err) => {debugger}
    );
  }

	ngOnInit() {
		console.log(this.onLoadWelcomeMessage, `App state is ${this.appState.state}`);
	}
}
