import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    "nombre": ["",[Validators.required]],
    "precio": ["",[Validators.required]],
    "descripcion": ["",[Validators.required]],
    "marca": ["",[Validators.required]],
    "referencia": ["",[Validators.required]],
    "imagen": ["",[Validators.required]],
    "id": ["",[Validators.required]]
  })

  id:string="";

  constructor(private fb:FormBuilder,
    private servicioProducto:ProductoService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  EditarProducto(){
    let id=this.fgValidador.controls["id"].value;
    let nombre=this.fgValidador.controls["nombre"].value;
    let precio=parseInt(this.fgValidador.controls["precio"].value);
    let descripcion=this.fgValidador.controls["descripcion"].value;
    let marca=this.fgValidador.controls["marca"].value;
    let referencia=this.fgValidador.controls["referencia"].value;
    let imagen=this.fgValidador.controls["imagen"].value;

    let p = new ModeloProducto();
    p.id=id;
    p.nombre=nombre;
    p.precio=precio;
    p.descripcion=descripcion;
    p.marca=marca;
    p.referencia=referencia;
    p.imagen=imagen;

    this.servicioProducto.EditarProducto(p).subscribe((datos:ModeloProducto)=>{
      alert ("El Producto Fue Editado Correctamente");
      this.router.navigate(["/admin/buscar-producto"])
    },(error:any)=>{
      alert ("Error En Edicion");
    })
  }

  BuscarProducto(){
    this.servicioProducto.ConsultaProductoID(this.id).subscribe((datos:ModeloProducto)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["marca"].setValue(datos.marca);
      this.fgValidador.controls["referencia"].setValue(datos.referencia);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
    },(error:any)=>{
      alert ("El Producto no Existe");
    })
  }

}
