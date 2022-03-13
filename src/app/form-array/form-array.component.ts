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
    });

    this.addFromControl();
  }

  getFormArray(): FormArray {
    return this.reactiveForm.get('names') as FormArray;
  }

  addFromControl(): void {
      this.getFormArray().controls.push(new FormControl())
  }

  submitForm(): void {
    console.log(this.reactiveForm);
  }
}
