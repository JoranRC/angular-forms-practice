import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonInputTypesComponent } from './common-input-types/common-input-types.component';
import { CustomCheckboxesFormComponent } from './custom-checkboxes-form/custom-checkboxes-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NestedFormGroupsComponent } from './nested-form-groups/nested-form-groups.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: '', redirectTo: '/template-driven', pathMatch: 'full' },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'simple-reactive-form', component: SimpleReactiveFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'nested-form-groups', component: NestedFormGroupsComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'common-input-types', component: CommonInputTypesComponent },
  { path: 'custom-checkboxes-form', component: CustomCheckboxesFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }