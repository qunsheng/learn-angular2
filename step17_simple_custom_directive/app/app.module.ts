import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MyHighlighterDirective } from './app.myhighlighter';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyHighlighterDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
