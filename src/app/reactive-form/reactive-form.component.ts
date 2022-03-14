import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'reactive-form-ui',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  firstNameControl: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //by hand creation of the reactiveForm without FormBuilder
    this.firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.reactiveForm = new FormGroup({ firstName: this.firstNameControl });

    //using the formBuilder service to create the formGroup
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      customValidationInput: ['GOAT', this.customValidation()]
    });
  }

  populateForm(): void {
    //use setValue to set all the formcontrols, use patchValue if you want to set the values of a subset of the formcontrols
    this.reactiveForm.patchValue({
      firstName: 'John'
    });
  }

  clearValidation(): void {
    this.reactiveForm.get('firstName').clearValidators();
    this.reactiveForm.get('firstName').updateValueAndValidity();
  }

  setValidation(): void {
    this.reactiveForm.get('firstName').setValidators([Validators.required, Validators.minLength(3)]);
    this.reactiveForm.get('firstName').updateValueAndValidity();
  }

  customValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== 'GOAT') {
        return {
          customValidationInput: true,
        };
      }
    };
  }

  addValueChangesSubscribtion(): void {
    //subscribing to valueChanges
    this.reactiveForm.get('firstName').valueChanges.subscribe((value) => {
      console.log('firstName value changed to: ', value);
    });
  }

  logForm(): void {
    console.log(this.reactiveForm);
  }

  submitForm(): void {
    console.log(this.reactiveForm);
  }
}
