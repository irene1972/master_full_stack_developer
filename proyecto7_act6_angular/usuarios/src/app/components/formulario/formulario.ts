import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../services/users';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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
  titulo:string='NUEVO USUARIO';
  textoBoton:string='Guardar';

  activeRoute=inject(ActivatedRoute);

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
        //Validators.email,
        Validators.pattern( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      imagen:new FormControl('',[
        Validators.required
      ])
    },[]);
  }

  ngOnInit(){
    this.activeRoute.params.subscribe((params:any)=>{
        if(Object.keys(params).length > 0){
          //FORMULARIO DE ACTUALIZACIÓN
          //todo: arreglar cuando la api devuelva los datos correctamente

          this.titulo='ACTUALIZAR USUARIO';
          this.textoBoton='Actualizar';
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
          
          this.miForm.controls['nombre'].setValue(this.miUsuario.first_name);
          this.miForm.controls['apellidos'].setValue(this.miUsuario.last_name);
          this.miForm.controls['email'].setValue(this.miUsuario.email);
          this.miForm.controls['imagen'].setValue(this.miUsuario.image);
        
      }else{
        //FORMULARIO DE NUEVO USUARIO
        this.miUsuario={};
      }

    });
  }

  cargarDatos(){
    let body:any=this.miForm.value;

    //marcar campos como touched al guardar
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
      return;
    }

    if(Object.keys(this.miUsuario).length > 0){
      //actualizar datos    
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
        if(data.error){
          Swal.fire('Ha habido un error', '', 'info');

        }else{
          this.miForm.reset();
          Swal.fire('Actualizado!', '', 'success');       
        }
        
      });

    }else{
      //guardar datos
      let insertar:any;
      
      insertar=this.usersService.insertUser(body).subscribe((data)=>{
       
        if(data.error){
          Swal.fire('Ha habido un error', '', 'info');
        }else{
          this.miForm.reset();
          Swal.fire('Guardado!', '', 'success');      
        }
      });
    }
  }

}
