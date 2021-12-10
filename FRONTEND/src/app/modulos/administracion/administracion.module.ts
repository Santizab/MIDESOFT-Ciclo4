import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { AsignarPedidoComponent } from './pedidos/asignar-pedido/asignar-pedido.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { RespuestasComponent } from './personas/respuestas/respuestas.component';
import { SolicitudesComponent } from './pedidos/solicitudes/solicitudes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    AsignarPedidoComponent,
    MainAdminComponent,
    RespuestasComponent,
    SolicitudesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
