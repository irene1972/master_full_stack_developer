import { Component } from '@angular/core';

@Component({
  selector: 'app-main7',
  standalone:true,
  imports: [],
  templateUrl: './main7.html',
  styleUrl: './main7.css',
})
export class Main7 {
  estudiantes: { id: number, name: string }[] = [
    { id: 1, name: 'Luis García' },
    { id: 2, name: 'Inés Hernández' },
    { id: 3, name: 'Rocío Martín' },
    { id: 4, name: 'Ramón Romero' }
  ]
}
