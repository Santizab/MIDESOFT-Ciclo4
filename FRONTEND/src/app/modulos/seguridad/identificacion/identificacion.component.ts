import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  captcha: string;
  validacion: string;
  estaIdentificado:boolean=false;

  fgValidador: FormGroup = this.fb.group({
    "usuario":["",[Validators.required, Validators.email]],
    "password":["",[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router:Router) {
    this.captcha= "";
    this.validacion="Correcto";
  }


  ngOnInit(): void {
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log("Captcha Resuelto: " + this.captcha);
  }

  identificarUsuario(){
    let usuario =this.fgValidador.controls["usuario"].value;
    let password=this.fgValidador.controls["password"].value;
    let claveCifrada= cryptoJS.MD5(password).toString();

    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      //ok
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["home"]);
    },(error:any)=>{
      //no
      alert("Datos Invalidos")
    })
  }

}
