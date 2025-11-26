import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  nombre:string='Irene Olmos';
  color:string='verde';
  contador=signal<number>(0);
  numero:number=0;

  ngOnInit(){
    setInterval(()=>{
      this.numero=Math.ceil(Math.random()*100);
      this.contador.set(Math.ceil(Math.random()*100));
    },1000);
  }
  getNombre():string{
    return 'Maria';
  }
}
