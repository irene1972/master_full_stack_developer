import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ContadorComponent } from './components/contador/contador.component';
import { Contador2Component } from './components/contador2/contador2.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';
import { Prueba3Component } from './components/prueba3/prueba3.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PruebaComponent,
    Prueba2Component,
    Prueba3Component,
    ContadorComponent,
    Contador2Component,
    FormularioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundaApp';
}
