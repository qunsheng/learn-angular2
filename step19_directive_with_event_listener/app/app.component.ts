import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 color >Hello {{name}}! Let's 'Hover' me!</h1>`,
})
export class AppComponent  { name = 'Angular'; }
