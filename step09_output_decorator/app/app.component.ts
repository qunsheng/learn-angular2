import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>This is the Root App Component</div>
                <child-one (onYell)="yell($event)" ></child-one>`,
})
export class AppComponent  {
  yell(e){
    alert("I am yelling");
  }

}