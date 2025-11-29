import { Injectable,inject } from '@angular/core';
import { Iuser2 } from '../interfaces/iuser2';
import { USUARIOS } from '../db/usuarios.db';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users2 {
  private baseUrl='https://jsonplaceholder.typicode.com/users';
  httpClient=inject(HttpClient);

  getAllUserObservable():Observable<Iuser2[]>{
    return this.httpClient.get<Iuser2[]>(this.baseUrl);
  }

  getAllUserPromise():Promise<Iuser2[]>{
    return lastValueFrom(this.httpClient.get<Iuser2[]>(this.baseUrl));
  }

}
