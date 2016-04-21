// Prefer CoreJS over the polyfills above
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

// Typescript emit helpers polyfill
import 'ts-helpers';

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/common';
import 'angular2/http';
import 'angular2/router';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';