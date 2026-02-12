import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/ipost';
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-blog',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  
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
    this.misPosts=response;
    
  }

  cargarDatos():void{
    
    if(this.miFormulario.valid){
      this.postsService.insert(this.miFormulario.value);
    }
    
    this.miFormulario.reset();

  }

}
