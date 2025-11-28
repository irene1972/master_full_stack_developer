import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caracteristicas',
  standalone:true,
  imports: [],
  templateUrl: './caracteristicas.html',
  styleUrl: './caracteristicas.css',
})
export class Caracteristicas {
  miUrl=inject(ActivatedRoute);
  ngOnInit(){
    this.miUrl.parent?.params.subscribe((params:any)=>{
      console.log(params);
    });
  }
}
