import { Component, OnInit } from '@angular/core';

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

  submitForm(form: any): void {
    console.log('Submit in template driven is called');
    console.log(form);
  }

}
