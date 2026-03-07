import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';
import { PRODUCTOS } from '../db/productos.db';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(){}
  getAll():IProducto[]{
    return [...PRODUCTOS];
  }

  getById(id:number):IProducto | undefined{
    return PRODUCTOS.find(prod=>prod.id===id);
  }
}
