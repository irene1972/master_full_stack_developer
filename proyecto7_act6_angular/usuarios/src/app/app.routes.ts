import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Formulario } from './components/formulario/formulario';
import { C404 } from './components/c404/c404';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:Main},
    {path:'formulario',component:Formulario},
    {path:'detalle/:id',component:Detalle},
    {path:'actualizar',component:Formulario},
    {path:'nuevo',component:Formulario},
    {path:'**',component:C404}
];
