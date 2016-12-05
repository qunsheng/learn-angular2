import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 App for two way binding</h1>
    <input type="text" [(ngModel)]="name"/> {{name}}`
})

export class AppComponent  { name = 'Angular'; }

