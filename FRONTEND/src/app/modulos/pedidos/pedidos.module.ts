import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainAsesorComponent } from './main-asesor/main-asesor.component';
import { ConsultarPedidosAsignadosComponent } from './consultar-pedidos-asignados/consultar-pedidos-asignados.component';
import { EditarPedidosAsignadosComponent } from './editar-pedidos-asignados/editar-pedidos-asignados.component';
import { BuscarPedidosComponent } from './buscar-pedidos/buscar-pedidos.component';


@NgModule({
  declarations: [
    MainAsesorComponent,
    ConsultarPedidosAsignadosComponent,
    EditarPedidosAsignadosComponent,
    BuscarPedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
