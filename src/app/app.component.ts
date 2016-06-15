import {Component} from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public staticPublicProp: string;

  constructor(){
    this.staticPublicProp = "fooImAStaticPropString";
  };
}
