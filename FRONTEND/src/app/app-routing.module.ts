import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPNFComponent } from './plantilla/error-pnf/error-pnf.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"home",
    component:InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"seguridad",
    loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"admin",
    loadChildren:()=>import("./modulos/administracion/administracion.module").then(x=>x.AdministracionModule)
  },
  {
    path:"pedidos",
    loadChildren:()=>import("./modulos/pedidos/pedidos.module").then(x=>x.PedidosModule)
  },
  {
    path:"cliente",
    loadChildren:()=>import("./modulos/cliente/cliente.module").then(x=>x.ClienteModule)
  },
  {
    path:"**",
    component:ErrorPNFComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
