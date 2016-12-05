import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div> {{counter}}</div>
               <button (click)="addCounter()">Add</button>
              `
})
export class AppComponent  {
    counter: number;
    constructor() {
        this.counter = 0;
    }
    
    addCounter(): void {
        this.counter++;
    }
}
