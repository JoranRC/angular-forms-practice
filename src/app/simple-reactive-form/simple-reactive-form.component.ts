import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.scss']
})
export class SimpleReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submitForm(): void {
    console.log(this.reactiveForm);
  }

}
