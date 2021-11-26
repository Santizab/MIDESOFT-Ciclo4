import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { ComprarComponent } from './comprar/comprar.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { EstadoCompraComponent } from './botones-mis-compras/estado-compra/estado-compra.component';
import { CancelarCompraComponent } from './botones-mis-compras/cancelar-compra/cancelar-compra.component';
import { EstadoCreditoComponent } from './botones-mis-compras/estado-credito/estado-credito.component';
import { FacturacionComponent } from './botones-mis-compras/facturacion/facturacion.component';
import { MainClienteComponent } from './main-cliente/main-cliente.component';


@NgModule({
  declarations: [
    RegistroClienteComponent,
    ComprarComponent,
    MisComprasComponent,
    EstadoCompraComponent,
    CancelarCompraComponent,
    EstadoCreditoComponent,
    FacturacionComponent,
    MainClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
