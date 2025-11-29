import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  miFormulario:FormGroup;

  constructor(){
    this.miFormulario=new FormGroup({
      titulo:new FormControl('',[Validators.required]),
      imagen:new FormControl('',[Validators.required]),
      noticia:new FormControl('',[Validators.required]),
      fecha:new FormControl('',[Validators.required])
    },[]);
  }

  cargarDatos(){
    console.log(this.miFormulario.value);
  }
}
