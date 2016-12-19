import { Directive, ElementRef } from '@angular/core';
@Directive({ 
  selector:'[myColor]',
  inputs: ['myBgColor', 'myColour:color']
})
export class ColorDirective {
   
  constructor(private el: ElementRef) {
    this.el = el;
  }
   
  set myColour(color:string){
    this.el.nativeElement.style.color = color;
  }
   
  set myBgColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}