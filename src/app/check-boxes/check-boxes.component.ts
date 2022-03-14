import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'check-boxes',
  templateUrl: './check-boxes.component.html',
  styleUrls: ['./check-boxes.component.scss']
})
export class CheckBoxesComponent implements OnInit {
  @Input() reactiveFormArray: FormArray;
  @Input() data: Array<any>;

  constructor() {}

  ngOnInit(): void {}

  onCheckboxChange(e: any) {
    if (e.target.checked) {
        this.reactiveFormArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.reactiveFormArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
            this.reactiveFormArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
