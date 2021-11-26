import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelarCompraComponent } from './botones-mis-compras/cancelar-compra/cancelar-compra.component';
import { EstadoCompraComponent } from './botones-mis-compras/estado-compra/estado-compra.component';
import { EstadoCreditoComponent } from './botones-mis-compras/estado-credito/estado-credito.component';
import { FacturacionComponent } from './botones-mis-compras/facturacion/facturacion.component';
import { ComprarComponent } from './comprar/comprar.component';
import { MainClienteComponent } from './main-cliente/main-cliente.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path:"cancelar-compra",
    component:CancelarCompraComponent
  },
  {
    path:"estado-compra",
    component:EstadoCompraComponent
  },
  {
    path:"estado-credito",
    component:EstadoCreditoComponent
  },
  {
    path:"factura",
    component:FacturacionComponent
  },
  {
    path:"comprar",
    component:ComprarComponent
  },
  {
    path:"mis-compras",
    component:MisComprasComponent
  },
  {
    path:"registro-cliente",
    component:RegistroClienteComponent
  },
  {
    path:"main-cliente",
    component:MainClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
