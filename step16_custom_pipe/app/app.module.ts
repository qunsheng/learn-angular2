import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CapitalizePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
