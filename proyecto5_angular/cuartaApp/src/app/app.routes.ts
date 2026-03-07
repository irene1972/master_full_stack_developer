import { Routes } from '@angular/router';
import { C404 } from './components/c404/c404';
import { Productos } from './components/productos/productos';
import { Main } from './components/main/main';
import { InfoProducto } from './components/info-producto/info-producto';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:Main},
    {path:'productos',component:Productos},
    {path:'productos/:id',component:InfoProducto},
    {path:'**',component:C404}
];
