import { Component,inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser';
import { Users } from '../../services/users';

@Component({
  selector: 'app-users-list',
  standalone:true,
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  misUsuarios:IUser[]=[];
  userService=inject(Users)

  ngOnInit(){
    let response=this.userService.getAll();
    this.misUsuarios=response;
  }
}
