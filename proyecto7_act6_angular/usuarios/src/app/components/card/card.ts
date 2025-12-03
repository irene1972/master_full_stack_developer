import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Users } from '../../services/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {
  miUsuario:any;
  usersService=inject(Users);

  @Input() imagen:string='';
  @Input() nombre:string='';
  @Input() id:number=0;

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
