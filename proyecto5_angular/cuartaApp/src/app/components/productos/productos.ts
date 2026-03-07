import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos';
import { IProducto } from '../../interfaces/iproducto';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-productos',
  imports: [Producto],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos:IProducto[]=[];

  constructor(private productosService:ProductosService){}

  ngOnInit(){
    this.productos=this.productosService.getAll();
  }
}
