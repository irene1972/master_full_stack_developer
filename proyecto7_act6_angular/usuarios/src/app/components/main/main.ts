import { Component, inject } from '@angular/core';
import { Card } from '../card/card';
import { IUser } from '../../interfaces/iuser';
import { Users } from '../../services/users';
import { IUserResponse } from '../../interfaces/iuser-response';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [CommonModule,Card],
  templateUrl: './main.html',
  styleUrl: './main.css',
})

export class Main {
  usersService=inject(Users);
  //misUsuarios:IUser[]=[];
  //items$:any;
  //response:IUserResponse|undefined;
  //misUsuariosPromise:IUser[]=[];

  // Observable que contiene directamente el array results
  items$ = this.usersService.getAllUsers().pipe(
    map((resp) => resp.results)
  );
  /*
  //Esta opción no funciona bien al recargar no aparece el bucle for
  constructor(){
    this.usersService.getAllUsers().subscribe((data)=>{
      console.log(data.results);
      this.misUsuarios=data.results;
    });
  }
  //Esta opción tampoco funciona bien al recargar no aparece el bucle for
  async ngOnInit(){
    this.response=await this.usersService.getAllUsersPromise();
    this.misUsuariosPromise=this.response.results;
  }
  */
}
