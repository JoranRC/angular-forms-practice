import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form-ui',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  firstName: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //by hand creation of the reactiveForm without FormBuilder
    // this.firstName = new FormControl;
    // this.reactiveForm = new FormGroup({firstName: this.firstName});

    //using the formBuilder service to create the formGroup
    this.reactiveForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  populateForm(): void {
     //use setValue to set all the formcontrols, use patchValue if you want to set a subset of the formcontrols
     //in this case both will work because there is only one formcontrol
    this.reactiveForm.patchValue({
        firstName: 'John'
    });
    
  }

  submitForm(): void {
    console.log('Submit in reactive form is called');
    console.log(this.reactiveForm);
  }

}
