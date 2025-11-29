import { Routes } from '@angular/router';
import { Contacto } from './components/contacto/contacto';
import { Nosotros } from './components/nosotros/nosotros';
import { C404 } from './components/c404/c404';
import { Blog } from './components/blog/blog';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:Blog},
    {path:'contacto',component:Contacto},
    {path:'nosotros',component:Nosotros},
    {path:'**',component:C404}
];
