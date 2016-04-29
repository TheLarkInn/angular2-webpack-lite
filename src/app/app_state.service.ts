/* Thanks from @AngularClass */
import {Injectable} from '@angular/core';

export class AppState {
  _state = {};

  constructor() {}
  
  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state[prop] || state;
  }

  set(prop: string, value: any) {
    return this._state[prop] = value;
  }


  _clone(object) {
    return JSON.parse(JSON.stringify( object ));
  }


}