import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NestedFormGroupsComponent } from './nested-form-groups/nested-form-groups.component';
import { CheckBoxesComponent } from './check-boxes/check-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    NestedFormGroupsComponent,
    CheckBoxesComponent
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
