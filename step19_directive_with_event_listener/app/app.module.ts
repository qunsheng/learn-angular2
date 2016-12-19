import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HoverDirective } from './app.hover.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HoverDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
