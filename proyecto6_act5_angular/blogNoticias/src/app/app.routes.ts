import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Contacto } from './components/contacto/contacto';
import { Nosotros } from './components/nosotros/nosotros';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:Main},
    {path:'contacto',component:Contacto},
    {path:'nosotros',component:Nosotros}
];
