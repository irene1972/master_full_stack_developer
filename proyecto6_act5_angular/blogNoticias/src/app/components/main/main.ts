import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/ipost';
import { Posts } from '../../services/posts';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone:true,
  imports: [ReactiveFormsModule, DatePipe],
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

  cargarDatos($event:any):void{
    let formularioDom=$event.target;
    let insertar;
    if(this.miFormulario.valid){
      insertar=this.postsService.insert(this.miFormulario.value);
    }
    console.log($event.target);
    formularioDom.querySelector('#titulo').value='';
    formularioDom.querySelector('#imagen').value='';
    formularioDom.querySelector('#noticia').value='';
    formularioDom.querySelector('#fecha').value='';

    let div=document.createElement('DIV');

    if(insertar){
      div.textContent=insertar;
      div.classList.add('exito');
    }else{
      div.textContent='Ha habido un error';
      div.classList.add('error');
    }

    formularioDom.appendChild(div);

    setTimeout(()=>{
      div.remove();
    },3000);
  }
}
