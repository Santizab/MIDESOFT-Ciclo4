import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPedidosComponent } from './buscar-pedidos/buscar-pedidos.component';
import { ConsultarPedidosAsignadosComponent } from './consultar-pedidos-asignados/consultar-pedidos-asignados.component';
import { EditarPedidosAsignadosComponent } from './editar-pedidos-asignados/editar-pedidos-asignados.component';
import { MainAsesorComponent } from './main-asesor/main-asesor.component';

const routes: Routes = [
  {
    path:"main-asesor",
    component:MainAsesorComponent
  },
  {
    path:"consultar-pedidos-asignados",
    component:ConsultarPedidosAsignadosComponent
  },
  {
    path:"editar-pedidos-asignados",
    component:EditarPedidosAsignadosComponent
  },
  {
    path:"buscar-pedidos",
    component:BuscarPedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
