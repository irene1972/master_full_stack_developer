import { Routes } from '@angular/router';
import { Productos } from './components/productos/productos';
import { Producto } from './components/producto/producto';
import { Caracteristicas } from './components/caracteristicas/caracteristicas';
import { Opiniones } from './components/opiniones/opiniones';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'productos',component:Productos},
    {path:'producto/:url',component:Producto, children:[
        {path:'',pathMatch:'full',redirectTo:'caracteristicas'},
        {path:'caracteristicas',component:Caracteristicas},
        {path:'opiniones',component:Opiniones},
    ]}
];
