import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'child-one',
    template: `<div>This is child One</div>
                <button (click)="fireYellEvent($event)" > Hit me </button> `,

})
export class ChildOneComponent { 
    @Output() onYell = new EventEmitter();

    fireYellEvent(e){
        this.onYell.emit(e);
    }


    constructor() {

    }
}