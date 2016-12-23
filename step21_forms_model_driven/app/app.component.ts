import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: ` 
    <h3>Create Model Driven Form</h3>
    <form [formGroup]="formModel" (ngSubmit)="logForm()" novalidate >
      <label>Firstname:</label>
      <input formControlName="firstname" type="text"/>
      <br/>
      <label> Lastname: </label>
      <input formControlName="lastname" type="text" />
      <br />
      <label >Street</label>
      <input formControlName="steet" type="text" />
      <br />
      <label>Zip</label>
      <input formControlName="zip" type="text"  />
      <br />
      <label>City</label>
      <input formControlName="city" type="text" ngModel/>
      <br />
      <button type="submit">Submit</button>
    </form>
  `,
})
export class AppComponent implements OnInit{
  public formModel: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.formModel = this._fb.group (
      {
        firstname: ['Quentin', <any>Validators.required],
        lastname: [''],
        steet: [''],
        zip: ['', [<any>Validators.required, <any>Validators.pattern("[0-9]{5}")]],
        city: [''],
      }
    );
  }

  logForm() {
     console.log(this.formModel.value);
  }
  
}

