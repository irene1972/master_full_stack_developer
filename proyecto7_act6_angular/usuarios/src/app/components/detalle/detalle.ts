import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Users } from '../../services/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})

export class Detalle {
  activedRoute=inject(ActivatedRoute);
  usersService=inject(Users);
  id:number=0;
  miUsuario:any={
                "id": 55,
                "first_name": "Emilio",
                "last_name": "Alva Durán",
                "username": "emilio.alva",
                "email": "emilio.alvaduran@peticiones.online",
                "image": "https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online"
                };

  ngOnInit(){
    this.activedRoute.params.subscribe((params:any)=>{
      console.log(params);
      this.id=params.id;
      
    });
    this.usersService.getUserById(this.id).subscribe((data)=>{
      console.log(data);
      //this.miUsuario=data;
    });
  }

  eliminar2($event:any,id:number){
    $event.preventDefault();
    Swal.fire({
      title: '¿Estás seguro de eliminar el usuario?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#ff0000',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          let eliminar:any;

          eliminar=this.usersService.deleteUser(id).subscribe((data)=>{
          console.log(data);

          /*
          data={
                "id": 55,
                "first_name": "Emilio",
                "last_name": "Alva Durán",
                "username": "emilio.alva",
                "email": "emilio.alvaduran@peticiones.online",
                "image": "https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online"
                };

          eliminar={
                  "id": 55,
                  "first_name": "Emilio",
                  "last_name": "Alva Durán",
                  "username": "emilio.alva",
                  "email": "emilio.alvaduran@peticiones.online",
                  "image": "https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online"
                    };
          */

          if(eliminar.error){
            Swal.fire('Ha habido un error', '', 'info');
          }else{
            Swal.fire('Eliminado!', '', 'success');
          }
        });
      }
    });
  }
  
}
