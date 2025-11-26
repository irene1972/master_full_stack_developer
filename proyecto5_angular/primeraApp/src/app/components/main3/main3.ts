import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main3',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './main3.html',
  styleUrl: './main3.css',
})
export class Main3 {
  nombre:string='Irene';

  cambiarNombre($event:any):void{
    this.nombre=$event.target.value;
  }
}
