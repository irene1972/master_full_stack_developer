import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  standalone: true,
  imports: [],
  templateUrl: './prueba2.component.html',
  styleUrl: './prueba2.component.css'
})
export class Prueba2Component {
  ruta: string = 'http://www.google.es';
  color: string = 'rojo';
  stock:boolean=true;
}
