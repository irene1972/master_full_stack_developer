import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Main,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularProject');
}
