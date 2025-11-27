import { Component } from '@angular/core';
import { IEstudiante } from '../../interfaces/iestudiante.interface';

@Component({
  selector: 'app-main8',
  standalone:true,
  imports: [],
  templateUrl: './main8.html',
  styleUrl: './main8.css',
})
export class Main8 {
  estudiantes:IEstudiante[] = [
    { id: 1, name: 'Luis García' },
    { id: 2, name: 'Inés Hernández' },
    { id: 3, name: 'Rocío Martín' },
    { id: 4, name: 'Ramón Romero' }
  ];
  role:string='';

  cambiarRole($event:any):void{
    this.role=$event.target.value;
  }
}
