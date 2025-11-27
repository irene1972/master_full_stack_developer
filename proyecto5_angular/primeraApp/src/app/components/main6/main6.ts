import { Component } from '@angular/core';

@Component({
  selector: 'app-main6',
  standalone:true,
  imports: [],
  templateUrl: './main6.html',
  styleUrl: './main6.css',
})
export class Main6 {
  ciudad:string='madrid';
  cargarCiudad($event:any):void{
    this.ciudad=$event.target.value;
    console.log(this.ciudad);
  }
}
