import { Injectable, inject } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/iuser-response';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private baseUrl='https://peticiones.online/api/users';
  httpClient=inject(HttpClient)

  getAllUsers():Observable<IUserResponse>{
    return this.httpClient.get<IUserResponse>(this.baseUrl);
  }

  getUserById(id:number):Observable<IUser>{
    return this.httpClient.get<IUser>(this.baseUrl+'/'+id);
  }

  insertUser(body:IUser):Observable<any>{
    let url='https://peticiones.online/api/users';
    return this.httpClient.post(url,body, {});
  }
  deleteUser(id:number):Observable<any>{
    let url='https://peticiones.online/api/users/';
    return this.httpClient.delete(url + id,{});
  }
  updateUser(id:number,body:IUser):Observable<any>{
    let url='https://peticiones.online/api/users/';
    return this.httpClient.put(url + id,body,{})
  }
}
