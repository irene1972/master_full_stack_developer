import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  //creamos una propiedad de clase
  titulo:string;
  //inicializamos en el mismo punto de la creación
  numero:number=2;
  parrafo:string=`En un lugar de la <strong>mancha</strong>`;

  constructor(){
    //inicialización de la propiedad titulo
    this.titulo='Titulo del Componente';
  }
  getParrafo(): string {
    return 'Este parrafo me esta llegando del return de una función dentro de mi componente.'
  }
  getContenido(): string {
    return `Este contenido es un template literal y tiene un listado
            <ul>
              <li>opción 1</li>
              <li>opción 2</li>
            </ul>
            `
  }

}
