import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGraficosComponent } from './main-graficos/main-graficos.component';
import { ProductosPorFechaComponent } from './productos-por-fecha/productos-por-fecha.component';
import { SolicitudesPorClienteComponent } from './solicitudes-por-cliente/solicitudes-por-cliente.component';
import { TipoVsEstadoComponent } from './tipo-vs-estado/tipo-vs-estado.component';

const routes: Routes = [
  {
    path:"main-grafos",
    component:MainGraficosComponent
  },
  {
    path:"prod-fecha",
    component:ProductosPorFechaComponent
  },
  {
    path:"solicitudes-cliente",
    component:SolicitudesPorClienteComponent
  },
  {
    path:"tipo-estado",
    component:TipoVsEstadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
