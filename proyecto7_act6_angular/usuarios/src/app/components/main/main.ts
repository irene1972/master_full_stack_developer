import { Component, inject } from '@angular/core';
import { Card } from '../card/card';
import { IUser } from '../../interfaces/iuser';
import { Users } from '../../services/users';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [Card],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  misUsuarios:IUser[]=[];
  usersService=inject(Users);

  ngOnInit(){
    this.usersService.getAllUsers().subscribe((data)=>{
      console.log(data.results);
      this.misUsuarios=data.results;
    });
  }
}
