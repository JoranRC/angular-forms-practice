import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NestedFormGroupsComponent } from './nested-form-groups/nested-form-groups.component';
import { CheckBoxesComponent } from './check-boxes/check-boxes.component';
import { CommonInputTypesComponent } from './common-input-types/common-input-types.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { CustomCheckboxesFormComponent } from './custom-checkboxes-form/custom-checkboxes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    NestedFormGroupsComponent,
    CheckBoxesComponent,
    CommonInputTypesComponent,
    SimpleReactiveFormComponent,
    CustomCheckboxesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
