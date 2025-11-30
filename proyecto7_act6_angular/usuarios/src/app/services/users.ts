import { Injectable, inject } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private baseUrl='https://peticiones.online/api/users';
  httpClient=inject(HttpClient)

  //getAllUsers():Observable<IUser[]>{
  getAllUsers():Observable<any>{
    //return this.httpClient.get<IUser[]>(this.baseUrl);
    return this.httpClient.get<any>(this.baseUrl);
  }

  getUserById(id:number):Observable<any>{
    console.log('irene',this.baseUrl+'/'+id);
    return this.httpClient.get<any>(this.baseUrl+'/'+id);
  }
  /*
  private usuarios:IUser[]=USUARIOS;

  getAll():IUser[]{
    return this.usuarios;
  }
  getById(id:number):IUser | undefined{
    return this.usuarios.find(usuario=>usuario.id===id)
  }
  insert(user:IUser):string{
    this.usuarios.push(user);
    return 'Usuario guardado correctamente';
  }
  */
}
