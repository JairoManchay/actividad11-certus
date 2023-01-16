import { Component } from '@angular/core';
import { RegistroInterfaceTs } from 'src/app/model/registro.interface.ts';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styles: [
  ]
})
export class FormTemplateComponent {

  registro: RegistroInterfaceTs={
    nombre:"",
    email:"",
    mensaje:""
  }

  conectado = false;

  Mostrar(){
    console.log(this.registro);
    return this.conectado=true;
  }
}
