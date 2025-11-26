import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-main2',
  standalone:true,
  imports: [],
  templateUrl: './main2.html',
  styleUrl: './main2.css',
})
export class Main2 {
  contador:number=0;
  contadorSignal:WritableSignal<number>=signal<number>(0);
  ciudad:string='';
  ciudadSignal:WritableSignal<string>=signal<string>('');

  aumentar():void{
    this.contador++;
    this.contadorSignal.update((numeroActual:number)=>numeroActual=numeroActual+1);
  }
  cargarCiudad($event:any):void{
    this.ciudad=$event.target.value;
    this.ciudadSignal.update((ciudad:string)=>ciudad=$event.target.value);
  }
  mostrarValor(mensaje:string):void{
    alert(mensaje);
  }
}
