import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main4',
  standalone:true,
  imports: [],
  templateUrl: './main4.html',
  styleUrl: './main4.css',
})
export class Main4 {
  @Input() img:string='';
  @Input() texto:string='';
  @Output() fotoEmitir:EventEmitter<string>=new EventEmitter();
  
  cargar():void{
    this.fotoEmitir.emit(this.texto);
  }
}
