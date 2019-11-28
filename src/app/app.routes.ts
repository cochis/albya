import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ShowCategoriaComponent } from './components/show-categoria/show-categoria.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'categoria',  component: ShowCategoriaComponent},
    {path: '', pathMatch:  'full', redirectTo: 'home'},
    {path: '**', pathMatch:  'full', redirectTo: 'error'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

