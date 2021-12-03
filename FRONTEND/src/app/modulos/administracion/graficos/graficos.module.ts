import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { MainGraficosComponent } from './main-graficos/main-graficos.component';
import { TipoVsEstadoComponent } from './tipo-vs-estado/tipo-vs-estado.component';
import { ProductosPorFechaComponent } from './productos-por-fecha/productos-por-fecha.component';
import { SolicitudesPorClienteComponent } from './solicitudes-por-cliente/solicitudes-por-cliente.component';


@NgModule({
  declarations: [
    MainGraficosComponent,
    TipoVsEstadoComponent,
    ProductosPorFechaComponent,
    SolicitudesPorClienteComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ]
})
export class GraficosModule { }
