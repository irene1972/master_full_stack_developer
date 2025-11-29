import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Contacto } from './components/contacto/contacto';
import { Productos } from './components/productos/productos';
import { ProductoView } from './components/productos/producto-view/producto-view';
import { C404 } from './components/c404/c404';
import { Caracteristicas } from './components/productos/caracteristicas/caracteristicas';
import { Opiniones } from './components/productos/opiniones/opiniones';
import { UsersList } from './components/users-list/users-list';
import { UsersList2 } from './components/users-list2/users-list2';

export const routes: Routes = [
    {path:'', pathMatch:'full',redirectTo:'inicio'},
    {path:'inicio',component:Main},
    {path: 'usuarios', component: UsersList2 },
    {path:'contacto',component:Contacto},
    {path:'productos',component:Productos},
    {path:'producto/:url',component:ProductoView,children:[
        {path:'', pathMatch:'full',redirectTo:'caracteristicas'},
        {path:'caracteristicas',component:Caracteristicas},
        {path:'opiniones',component:Opiniones},
    ]},
    {path:'**',component:C404}
];
