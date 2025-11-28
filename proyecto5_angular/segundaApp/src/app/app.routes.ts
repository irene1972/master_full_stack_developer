import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { C404Component } from './components/c404/c404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    {path: '**', component: C404Component}
];
