import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   template: `<input [value]="'Hello ' + name">
            <button class="btn btn-default" 
            [class.active]="isActiveB1" [style.color] = "isActiveB1?'blue':'red'">
            button1</button>
            <button class="btn btn-default" [class.active]="isActiveB2" [style.color] = "isActiveB2?'blue':'red'">
            button2</button>`
})
export class AppComponent  { 
    name: string;
    isActiveB1: boolean;
    isActiveB2: boolean;

    constructor() {
        this.name = 'Name Property';
        this.isActiveB1 = true;
        this.isActiveB2 = false;
    }
}
