import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 
    <h3>Create Template Driven Form</h3>
    <form #form="ngForm" (ngSubmit)="logForm(form.value)" novalidate >
      <label>Firstname:</label>
      <input name="firstname" required ngModel type="text"/>
      <br/>
      <label> Lastname: </label>
      <input name="lastname" type="text" ngModel />
      <br />
      <label >Street</label>
      <input name="steet" type="text" ngModel/>
      <br />
      <label>Zip</label>
      <input name="zip" type="text" required ngModel pattern="[0-9]{5}" />
      <br />
      <label>City</label>
      <input name="city" type="text" ngModel/>
      <br />
      <button type="submit">Submit</button>
    </form>
  `,
})
export class AppComponent  {
   logForm(value) {
     console.log(value);
   }
  
}
