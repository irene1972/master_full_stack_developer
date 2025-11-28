import { Component,inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-producto-view',
  standalone:true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './producto-view.html',
  styleUrl: './producto-view.css',
})
export class ProductoView {
  miUrl=inject(ActivatedRoute);
  titulo:string='';
  ngOnInit(){
    this.miUrl.params.subscribe((params:any)=>{
      console.log(params.url);
      this.titulo=params.url;
    });
  }
}
