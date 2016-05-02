import {bootstrap} from '@angular/platform-browser-dynamic';
import {
	APPLICATION_DIRECTIVES, 
	APPLICATION_PIPES, 
	ENV_PROVIDERS, 
	PROVIDERS, 
	PIPES, 
	DIRECTIVES
} from './platform/browser';

import {AppComponent} from './app/';

bootstrap(AppComponent, [
	APPLICATION_DIRECTIVES, 
	APPLICATION_PIPES, 
	ENV_PROVIDERS, 
	PROVIDERS, 
	PIPES, 
	DIRECTIVES
]).catch(console.error);