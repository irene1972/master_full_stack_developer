import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Formulario } from './components/formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('terceraApp');
}
