import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';


export const routes: Routes = [
    { path: '', redirectTo: 'produto-lista', pathMatch: 'full'},
    { path: 'produto-lista', component: ProdutoListaComponent},
];
