import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/ipost';
import { Posts } from '../../services/posts';


@Component({
  selector: 'app-main',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  misPosts:IPost[]=[];
  postsService=inject(Posts);
  miFormulario:FormGroup;

  constructor(){
    this.miFormulario=new FormGroup({
      titulo:new FormControl('',[Validators.required]),
      imagen:new FormControl('',[Validators.required]),
      noticia:new FormControl('',[Validators.required]),
      fecha:new FormControl('',[Validators.required])
    },[]);
  }

  ngOnInit(){
    let response=this.postsService.getAll();
    console.log(response);
    this.misPosts=response;
    
  }

  cargarDatos(){
    console.log(this.miFormulario.value);
  }
}
