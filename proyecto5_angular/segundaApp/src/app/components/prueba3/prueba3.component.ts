import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.css']
})
export class Prueba3Component {
  textoInput: string = 'Texto de prueba';
  
  hacerClick():void{
    alert('has hecho click en el boton');
  }
}
