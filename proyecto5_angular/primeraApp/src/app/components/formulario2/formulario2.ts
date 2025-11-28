import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario2.html',
  styleUrl: './formulario2.css',
})
export class Formulario2 {
  nombreForm:FormGroup;
  constructor(){
    this.nombreForm=new FormGroup({
      nombre: new FormControl('',[
        Validators.required
      ]),
      apellidos: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('',[]),
      telefono: new FormControl('',[]),
      campoOculto: new FormControl('',[])
    },[])
  }
  cargarDatos(){
    console.log(this.nombreForm.value);
  }
  
}
