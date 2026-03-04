import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caracteristicas',
  imports: [],
  templateUrl: './caracteristicas.html',
  styleUrl: './caracteristicas.css',
})
export class Caracteristicas {
  activedRoute=inject(ActivatedRoute);

  ngOnInit(){
    this.activedRoute.parent?.params.subscribe((params:any)=>{
      console.log(params.url);
    });
  }
}
