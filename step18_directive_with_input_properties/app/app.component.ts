import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 myColor="blue" myBgColor="red">Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
