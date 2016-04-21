export * from './app.component.ts';
export * from './app-state.service.ts';

import {AppState} from './app-state.service.ts';
/*
 This is where you would add your custom application providers.
*/
export const APP_PROVIDERS = [
  AppState
]