import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../services/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  paramId:number=0;
  miUsuario:any;
  miForm:FormGroup;
  misUsuarios:any=[];
  usersService=inject(Users);

  activeRoute=inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.params.subscribe((params:any)=>{
        if(Object.keys(params).length > 0){
          //todo: arreglar cuando la api devuelva los datos correctamente
          let tituloDom=document.querySelector('.titulo');
          let botonDom=document.querySelector('BUTTON');

          if(tituloDom){
            tituloDom.textContent='ACTUALIZAR USUARIO';
          }
          this.paramId=parseInt(params.id);
          this.miUsuario=this.usersService.getUserById(params.id);
          /*
          this.miUsuario={
                          "id": 55,
                          "first_name": "Emilio",
                          "last_name": "Alva Durán",
                          "username": "emilio.alva",
                          "email": "emilio.alvaduran@peticiones.online",
                          "image": "https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online"
                        };
          */
          if(botonDom) botonDom.textContent='Actualizar';
          this.miForm.controls['nombre'].setValue(this.miUsuario.first_name);
          this.miForm.controls['apellidos'].setValue(this.miUsuario.last_name);
          this.miForm.controls['email'].setValue(this.miUsuario.email);
          this.miForm.controls['imagen'].setValue(this.miUsuario.image);
        
      }else{
        this.miUsuario={};
      }

    });
  }

  constructor(){
    
    this.miForm=new FormGroup({
      nombre:new FormControl('',[
        Validators.required
      ]),
      apellidos:new FormControl('',[
        Validators.required
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      imagen:new FormControl('',[
        Validators.required
      ])
    },[]);
  }

  cargarDatos($event:any){
    let body:any=this.miForm.value;
    let formularioDom=$event.target;

    if(Object.keys(this.miUsuario).length > 0){      
      this.usersService.updateUser(this.paramId,body).subscribe((data)=>{
        /*
        data={
            "id": 25,
            "first_name": "Lidia",
            "last_name": "Herrera Villanueva",
            "username": "lidia33",
            "email": "mariadelcarmen.herreravillanueva@peticiones.online",
            "image": "https://i.pravatar.cc/500?u=mariadelcarmen.herreravillanueva@peticiones.online"
            };
        */
        this.mostrarMensaje(data,formularioDom);
        
      });

    }else{
      let insertar:any;
      
      insertar=this.usersService.insertUser(body).subscribe((data)=>{
        this.mostrarMensaje(data,formularioDom);
      });
    }
  }

  mostrarMensaje(data:any,referencia:any):void{
    let div=document.createElement('DIV');

        if(data.error){
          div.textContent='Ha habido un error';
          div.classList.add('error');
        }else{
          this.miForm.reset();
          div.textContent='Se han guardado correctamente los datos del usuario ' + data.email;
          div.classList.add('exito');        
        }
        
        referencia.appendChild(div);
        
        setTimeout(()=>{
          div.remove();
        },3000);
  }
  
}
