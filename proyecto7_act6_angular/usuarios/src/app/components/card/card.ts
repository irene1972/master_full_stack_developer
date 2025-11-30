import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() imagen:string='';
  @Input() nombre:string='';
  @Input() id:number=0;

  eliminar($event:any){
    alert('Eliminar usuario');
  }
}
