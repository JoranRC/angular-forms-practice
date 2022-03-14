import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'custom-checkboxes-form',
  templateUrl: './custom-checkboxes-form.component.html',
  styleUrls: ['./custom-checkboxes-form.component.scss'],
})
export class CustomCheckboxesFormComponent implements OnInit {
  reactiveForm: FormGroup;
  data = [
    { description: 'Apple', value: 'Apple' },
    { description: 'Strawberry', value: 'Strawberry' },
    { description: 'Cherry', value: 'Cherry' },
    { description: 'Orange', value: 'Orange' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      checkBoxesArray: this.fb.array([]),
    });
  }

  submitForm(): void {
    console.log(this.reactiveForm);
  }
}
