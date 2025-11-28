import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-productos',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos=[
    {nombre:'iphone 12',precio:999.99,stock:10,url:'ihone12'},
    {nombre:'Samsung Galaxy S21',precio:899.99,stock:8,url:'galaxys21'},
  ]
}
