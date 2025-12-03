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

/*
  eliminar($event:any,id:number){
    let eliminar:any;
    $event.preventDefault();
    //alert('Eliminar usuario con id' + id);
    let tituloDom=document.querySelector('H1');
    
    

    if (window.confirm("¿Realmente quieres eliminar el usuario?")) {
      eliminar=this.usersService.deleteUser(id).subscribe((data)=>{
        console.log(data);

        this.mostrarMensaje(data,eliminar,tituloDom);
      });
    }

    
  }
  mostrarMensaje(data:IUser,eliminar:any,referencia:any){
    let div=document.createElement('DIV');
        
    if(eliminar.error){
      div.textContent='Ha habido un error';
      div.classList.add('error');
    }else{
      this.miUsuario=data;
      div.textContent='Se ha eliminado el usuario ' + this.miUsuario.first_name + ' correctamente';
      div.classList.add('exito');
    }
    referencia?.appendChild(div);
  
    setTimeout(()=>{
      div.remove();
    },3000);
  }
  */
}
