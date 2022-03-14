import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-array-ui',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      names: this.fb.array([]),
      namesAndSurnames: this.fb.array([]),
    });

    this.addFormControl();
    this.addFormGroup();
  }

  getFormNamesArray(): FormArray {
    return this.reactiveForm.get('names') as FormArray;
  }

  getFormNamesAndSurnamesArray(): FormArray {
    return this.reactiveForm.get('namesAndSurnames') as FormArray;
  }

  addFormControl(): void {
    this.getFormNamesArray().push(this.fb.control(''));
    this.reactiveForm.reset();
  }

  addFormGroup(): void {
      this.getFormNamesAndSurnamesArray().push(this.fb.group({name: this.fb.control(''), surname: this.fb.control('')}))
  }

  submitForm(): void {
    console.log(this.reactiveForm);
  }
}
