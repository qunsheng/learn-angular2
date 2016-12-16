import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
    private big = false;
    private back = false;
    private bord = false;

    private get myStyles(): any {
        return {
            'font-size' : this.big ? '26px' : '14px',
            'color' : this.back ? 'Blue' : 'Black',
            'background-color' : this.back ? 'Pink' : 'White',
            'border' : this.bord ? '1px solid Red' : ''
        };
    }
}
