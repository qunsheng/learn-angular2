import {Component, Input} from '@angular/core';

@Component({
    selector: 'child-one',
    template: `<div>This is child One</div>
                <p> {{data.name}} </p>
                <p> {{data.color}} </p>`,

})
export class ChildOneComponent { 
    @Input() data;

    constructor() {

    }
}
