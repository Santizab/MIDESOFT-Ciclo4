import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  captcha: string;
  validacion: string;

  constructor() {
    this.captcha= "";
    this.validacion="Correcto";
  }

  ngOnInit(): void {
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log("Captcha Resuelto: " + this.captcha);
  }

}
