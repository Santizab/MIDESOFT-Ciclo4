import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  id:string="";
  
  constructor(private servicioProducto:ProductoService,
    private route:ActivatedRoute,
    private router:Router) {
      this.id=this.route.snapshot.params["id"];
     }

  ngOnInit(): void {
    this.EliminarProducto();
  }

  EliminarProducto(){
    this.servicioProducto.EliminarProducto(this.id).subscribe((datos:ModeloProducto)=>{
      alert ("Producto Eliminado");
      this.router.navigate(["/admin/buscar-producto"])
    },(error:any)=>{
      alert ("Error en Eliminacion");
    })
  }
}
