import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ColorDirective } from './app.color.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ColorDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
