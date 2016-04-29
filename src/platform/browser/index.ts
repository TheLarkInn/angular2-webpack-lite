import {provide, PLATFORM_DIRECTIVES, PLATFORM_PIPES} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {ELEMENT_PROBE_PROVIDERS /*,ELEMENT_PROBE_PROVIDERS_PROD_MODE*/} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy, Location} from '@angular/common';


/*
  Add custom env providers here.
*/
export const ENVIRONMENT_PROVIDERS = [
  ...ELEMENT_PROBE_PROVIDERS
]

/*
  Add custom _angular2_ providers here.
*/
export const NG_APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...JSONP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
];

/*
  Add your custom pipes here.
*/
export const APPLICATION_PIPES = [

];

/*
  Add your custom directives here to be use anywhere.
*/
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES
];


/*
  These are the 3 exported constants we will add to our bootstrap in our main file.
*/
export const ENV_PROVIDERS = [
  ...ENVIRONMENT_PROVIDERS
]

export const PROVIDERS = [
  ...NG_APPLICATION_PROVIDERS
];

export const PIPES = [
  provide(PLATFORM_PIPES, { multi: true, useValue: APPLICATION_PIPES })
];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, { multi: true, useValue: APPLICATION_DIRECTIVES })
];

















