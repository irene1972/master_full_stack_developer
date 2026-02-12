import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/ipost';
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-blog',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  
  misPosts:IPost[]=[];
  insertado:boolean=false;
  postsService=inject(Posts);
  miFormulario:FormGroup;

  constructor(private cd: ChangeDetectorRef){
    this.miFormulario=new FormGroup({
      titulo:new FormControl('',[Validators.required]),
      imagen:new FormControl('',[Validators.required]),
      noticia:new FormControl('',[Validators.required]),
      fecha:new FormControl('',[Validators.required])
    },[]);
  }

  ngOnInit(){
    let response=this.postsService.getAll();
    this.misPosts=response;
    
  }

  cargarDatos():void{
    let insertar;
    if(this.miFormulario.valid){
      insertar=this.postsService.insert(this.miFormulario.value);
    }
    console.log(insertar);
    this.miFormulario.reset();

    if(insertar){
      this.insertado=true;
      setTimeout(()=>{
        this.insertado=false;
        this.cd.detectChanges();
      },3000);
    }

  }

}
