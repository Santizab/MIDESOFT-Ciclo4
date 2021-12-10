import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    "nombre": ["",[Validators.required]],
    "precio": ["",[Validators.required]],
    "descripcion": ["",[Validators.required]],
    "marca": ["",[Validators.required]],
    "referencia": ["",[Validators.required]],
    "imagen": ["",[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioProducto:ProductoService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let nombre=this.fgValidador.controls["nombre"].value;
    let precio=parseInt(this.fgValidador.controls["precio"].value);
    let descripcion=this.fgValidador.controls["descripcion"].value;
    let marca=this.fgValidador.controls["marca"].value;
    let referencia=this.fgValidador.controls["referencia"].value;
    let imagen=this.fgValidador.controls["imagen"].value;

    let p = new ModeloProducto();
    p.nombre=nombre;
    p.precio=precio;
    p.descripcion=descripcion;
    p.marca=marca;
    p.referencia=referencia;
    p.imagen=imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto)=>{
      alert ("El Producto Fue Creado Correctamente");
      this.router.navigate(["/admin/buscar-producto"])
    },(error:any)=>{
      alert ("Error En Guardado");
    })
  }

}
