import { Routes } from '@angular/router';
import { ListagemDespesasComponent } from './listar/listagem-despesas.component';
import { listarDespesasResolver } from './services/listar-despesas.resolver';

export const despesasRoutes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  {
    path: 'listar',
    component: ListagemDespesasComponent,
    resolve: { despesas: listarDespesasResolver },
  },
  // {
  //   path: 'cadastrar',
  //   component: CadastroDespesaComponent,
  //   resolve: { categorias: listarCategoriasResolver },
  // },
  // {
  //   path: 'editar/:id',
  //   component: EdicaoDespesaComponent,
  //   resolve: {
  //     despesa: visualizarDespesaResolver,
  //     categorias: listarCategoriasResolver,
  //   },
  // },
  // {
  //   path: 'excluir/:id',
  //   component: ExclusaoDespesaComponent,
  //   resolve: {
  //     despesa: visualizarDespesaResolver,
  //   },
  // },
];
