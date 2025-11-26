import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main2 } from './components/main2/main2';
import { Main3 } from './components/main3/main3';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Main,Main2,Main3,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularProject');
}
