import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChildOneComponent }  from './components/childOne.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildOneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
