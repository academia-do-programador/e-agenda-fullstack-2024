import { ResolveFn, Routes } from "@angular/router";
import { ListarCategoriaViewModel } from "./models/categoria.models";
import { inject } from "@angular/core";
import { CategoriaService } from "./services/categoria.service";
import { ListagemCategoriasComponent } from "./listar/listagem-categorias.component";
import { CadastroCategoriaComponent } from "./cadastrar/cadastro-categoria.component";

const listagemCategoriasResolver: ResolveFn<ListarCategoriaViewModel[]> = () => {
  return inject(CategoriaService).selecionarTodos();
};

export const categoriasRoutes: Routes = [
  {
    path : '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    component: ListagemCategoriasComponent,
    resolve: { categorias: listagemCategoriasResolver }
  },
  {
    path: 'cadastrar',
    component: CadastroCategoriaComponent,
  }
]
