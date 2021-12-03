import { identifierModuleUrl } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path:"cambio-password",
    component:CambioClaveComponent
  },
  {
    path:"login",
    component:IdentificacionComponent
  },
  {
    path:"recuperar-password",
    component:RecuperarClaveComponent
  },
  {
    path:"log-out",
    component:CerrarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
