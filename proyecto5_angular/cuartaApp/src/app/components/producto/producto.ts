import { Component, Input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [RouterLink],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  @Input() miProducto!: IProducto;

  ngOnInit(){
    //console.log('irene');
    //console.log(this.miProducto);
  }
}
