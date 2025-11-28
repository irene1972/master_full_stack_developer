import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arroba-input',
  standalone: true,
  imports: [],
  templateUrl: './arroba-input.component.html',
  styleUrl: './arroba-input.component.css'
})
export class ArrobaInputComponent {
  @Input('miTexto') texto:string="";
}
