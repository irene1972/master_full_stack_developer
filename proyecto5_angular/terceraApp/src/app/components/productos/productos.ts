import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos=[
    {nombre:'iPhone 12', precio:999.99, stock:10, url:'iphone12'},
    {nombre:'Samsung Galaxy S21', precio:899.99, stock:8, url:'galaxys21'},
    {nombre:'Google Pixel 5', precio:799.99, stock:5, url:'pixel5'}
  ];
}
