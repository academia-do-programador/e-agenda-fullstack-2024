import { Routes } from '@angular/router';

export const despesasRoutes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  // {
  //   path: 'listar',
  //   component: ListagemDespesasComponent,
  //   resolve: { despesas: listarDespesasResolver },
  // },
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
