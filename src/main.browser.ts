import {bootstrap} from '@angular/platform-browser-dynamic';
import {DIRECTIVES, PIPES, PROVIDERS, ENV_PROVIDERS} from './platform/browser';
import {App, APP_PROVIDERS} from './app';

bootstrap(App, [
	...PROVIDERS,
	...ENV_PROVIDERS,
	...DIRECTIVES,
	...PIPES,
	...APP_PROVIDERS
]).catch(console.error)