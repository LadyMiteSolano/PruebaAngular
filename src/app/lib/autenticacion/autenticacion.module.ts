import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../autenticacion/login/LoginComponent';
import { SignupComponent } from './signup/signup.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { SignupreactivoComponent } from './signupreactivo/signupreactivo.component';

@NgModule({
  declarations: [
    LoginComponent,
    AutenticacionComponent,
    SignupComponent,
    SignupreactivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    AutenticacionComponent,
    SignupComponent,
    SignupreactivoComponent
  ]
})
export class AutenticacionModule { }

