import { Component, signal } from '@angular/core';
import { Main4 } from '../main4/main4';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [Main4],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  nombre:string='Irene Olmos';
  color:string='verde';
  contador=signal<number>(0);
  numero:number=0;
  imagenes:string[]=['./imgs/perro1.jpeg','./imgs/perro2.jpeg','./imgs/perro3.jpeg'];
  texto1:string="Perro2";
  texto2=signal<string>("Perro3");
  textoImagenTocada:string="";

  ngOnInit(){
    setInterval(()=>{
      this.numero=Math.ceil(Math.random()*100);
      this.contador.set(Math.ceil(Math.random()*100));
    },1000);
  }
  getNombre():string{
    return 'Maria';
  }

  recogerTexto($event:string){
    this.textoImagenTocada=$event;
  }
}
