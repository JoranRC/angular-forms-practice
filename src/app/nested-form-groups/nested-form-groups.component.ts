import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'nested-form-groups-ui',
  templateUrl: './nested-form-groups.component.html',
  styleUrls: ['./nested-form-groups.component.scss'],
})
export class NestedFormGroupsComponent implements OnInit {
  reactiveForm: FormGroup;
  displayAdressError

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.email],
      adress: this.fb.group({
        firstName: '',
        street: '',
        streetConfirm: '',
      }),
    });

    this.reactiveForm.get('adress').setValidators(this.customValidation());
    this.reactiveForm.get('adress').get('streetConfirm').valueChanges.pipe(debounceTime(1000)).subscribe(value => this.checkAdressFormGroupForErrors());
  }

  customValidation(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      if (formGroup.controls.street.value !== formGroup.controls.streetConfirm.value) {
        return {
          adressDoesNotMatch: true,
        };
      }
    };
  }

  checkAdressFormGroupForErrors() {
    if(this.reactiveForm.get('adress').errors?.adressDoesNotMatch) {
        this.displayAdressError = true;
    } else {
        this.displayAdressError = false;
    }
  }

  logForm(): void {
    console.log(this.reactiveForm);
  }

  logAdressForm(): void {
    console.log(this.reactiveForm.get('adress'));
  }

  submitForm(): void {
    console.log(this.reactiveForm);
  }
}
