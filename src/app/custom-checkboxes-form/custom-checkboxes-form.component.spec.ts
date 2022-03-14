import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxesFormComponent } from './custom-checkboxes-form.component';

describe('CustomCheckboxesFormComponent', () => {
  let component: CustomCheckboxesFormComponent;
  let fixture: ComponentFixture<CustomCheckboxesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCheckboxesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCheckboxesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
