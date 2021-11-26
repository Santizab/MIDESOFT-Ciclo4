import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

import { RecaptchaModule } from "ng-recaptcha";


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    RecaptchaModule
  ]
})
export class SeguridadModule { }
