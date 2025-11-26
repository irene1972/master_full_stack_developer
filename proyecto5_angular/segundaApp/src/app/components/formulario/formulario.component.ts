import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  //creamos e inicializamos la propiedad
  alumno: any = {
    nombre: '',
    edad: 0
  }
  capturarDatos($event:any){
    console.log(this.alumno);
    console.log($event.target);
  }
}
