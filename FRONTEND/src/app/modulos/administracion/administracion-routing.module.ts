import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosModule } from './graficos/graficos.module';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { AsignarPedidoComponent } from './pedidos/asignar-pedido/asignar-pedido.component';
import { SolicitudesComponent } from './pedidos/solicitudes/solicitudes.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { RespuestasComponent } from './personas/respuestas/respuestas.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path:"main-admin",
    component:MainAdminComponent
  },
  {
    path:"respuestas",
    component:RespuestasComponent
  },
  {
    path:"solicitudes",
    component:SolicitudesComponent
  },
  {
    path:"asignar-pedido",
    component:AsignarPedidoComponent
  },
  {
    path:"grafos",
    loadChildren:()=>import("./graficos/graficos.module").then(x=>x.GraficosModule)
  },
  {
    path:"buscar-persona",
    component:BuscarPersonaComponent
  },
  {
    path:"crear-persona",
    component:CrearPersonaComponent
  },
  {
    path:"editar-persona",
    component:EditarPersonaComponent
  },
  {
    path:"eliminar-persona",
    component:EliminarPersonaComponent
  },
  {
    path:"buscar-producto",
    component:BuscarProductoComponent
  },
  {
    path:"crear-producto",
    component:CrearProductoComponent
  },
  {
    path:"editar-producto",
    component:EditarProductoComponent
  },
  {
    path:"eliminar-producto",
    component:EliminarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
