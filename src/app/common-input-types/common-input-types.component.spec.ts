import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInputTypesComponent } from './common-input-types.component';

describe('CommonInputTypesComponent', () => {
  let component: CommonInputTypesComponent;
  let fixture: ComponentFixture<CommonInputTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonInputTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInputTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
