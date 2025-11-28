import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { USUARIOS } from '../db/usuarios.db';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private usuarios:IUser[]=USUARIOS;
  
  getAll():IUser[]{
    return this.usuarios;
  }

  getById(id:number):IUser|undefined{
    return this.usuarios.find(usuario=>usuario.id===id);
  }

  insert(user:IUser):string{
    this.usuarios.push(user);
    return 'Usuario guardado correctamente';
  }
}
