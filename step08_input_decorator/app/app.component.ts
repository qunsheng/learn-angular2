import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>This is the Root App Component</div>
                <child-one [data] = "data"></child-one>`,
})
export class AppComponent  {
  data={
    name: "My Name",
    color: "Red"
  }
}
