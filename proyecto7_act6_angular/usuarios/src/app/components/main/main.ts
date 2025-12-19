import { Component, inject } from '@angular/core';
import { Card } from '../card/card';
import { Users } from '../../services/users';
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
  
  items$ = this.usersService.getAllUsers().pipe(
    map((resp) => resp.results)
  );
  

}
