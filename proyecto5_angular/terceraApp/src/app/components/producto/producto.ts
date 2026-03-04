import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  activedRoute=inject(ActivatedRoute);
  titulo:string='';

  ngOnInit(){
    this.activedRoute.params.subscribe((params:any)=>{
      this.titulo=params.url;
    });
  }
}
