import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Users } from '../../services/users';

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
}
