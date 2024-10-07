import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';


export const routes: Routes = [
    { path: '', redirectTo: 'produto-lista', pathMatch: 'full'},
    { path: 'produto-lista', component: ProdutoListaComponent},
    { path: 'produto-form', component: ProdutosFormComponent},
    { path: 'produto-form/:id', component: ProdutosFormComponent},
];
