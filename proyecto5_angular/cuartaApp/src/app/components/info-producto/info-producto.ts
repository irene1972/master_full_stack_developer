import { Component } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-info-producto',
  imports: [],
  templateUrl: './info-producto.html',
  styleUrl: './info-producto.css',
})
export class InfoProducto {
  miProducto!: IProducto | undefined;

  constructor(private productosService: ProductosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //recuperar parámetro de la url
    this.route.paramMap.subscribe(params => {
      const idString=params.get('id');
      if (idString) {
        const id = parseInt(idString);
        console.log(id);

        this.miProducto=this.productosService.getById(id);
        console.log(this.miProducto);
        if(!this.miProducto){
          this.router.navigate(['/**']);
        }
      }

    });
  }
}
