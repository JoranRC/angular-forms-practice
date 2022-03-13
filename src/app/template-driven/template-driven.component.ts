import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'template-driven-ui',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  person: any;

  constructor() { }

  ngOnInit(): void {
    this.person = {
        firstName: ''
      }
  }

  logForm(form: FormGroup): void {
    console.log(form);
  }

  submitForm(form: FormGroup): void {
    console.log(form);
  }

}
