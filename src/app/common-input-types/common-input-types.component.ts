import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

//object example to sent to BE
const exampleObject = {
  name: '',
  gender: 'Other',
  hobbies: [],
  adress: {
    street: '',
    number: undefined,
  },
  acceptedTerms: true,
};

@Component({
  selector: 'common-input-types',
  templateUrl: './common-input-types.component.html',
  styleUrls: ['./common-input-types.component.scss'],
})
export class CommonInputTypesComponent implements OnInit {
  reactiveForm: FormGroup;
  showError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: '',
      gender: 'Other',
      hobbies: this.fb.array([this.fb.control('')]),
      adress: this.fb.group({
        street: '',
        number: undefined,
      }),
      acceptedTerms: true
    });
  }

  addHobby() {
    this.getHobbies().push(this.fb.control(''));
  }

  removeHobby() {
      this.getHobbies().removeAt(this.getHobbies().length - 1)
  }

  getHobbies(): FormArray {
      return this.reactiveForm.get('hobbies') as FormArray;
  }

  logForm(): void {
    console.log(this.reactiveForm);
  }

  submitForm(): void {
    this.showError = true;
    console.log(this.reactiveForm);
  }
}
