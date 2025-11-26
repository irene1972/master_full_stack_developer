import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //creamos el objeto signal asignándole un valor inicial
  cont=signal(0);
  constructor(){
    setInterval(()=>{
      this.cont.update(value=>value+1);
    },1000);
    
  }
}
