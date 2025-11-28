import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';
import { Main2 } from './components/main2/main2';
import { Main3 } from './components/main3/main3';
import { Main5 } from './components/main5/main5';
import { Main6 } from './components/main6/main6';
import { Main7 } from './components/main7/main7';
import { Main8 } from './components/main8/main8';
import { Formulario } from './components/formulario/formulario';
import { Formulario2 } from './components/formulario2/formulario2';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularProject');
}
