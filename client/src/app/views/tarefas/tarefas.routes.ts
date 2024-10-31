import { Routes } from '@angular/router';

export const tarefasRoutes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  // {
  //   path: 'listar',
  //   component: ListagemTarefasComponent,
  //   resolve: { tarefas: listagemTarefasResolver },
  // },
  // {
  //   path: 'cadastrar',
  //   component: CadastroTarefaComponent,
  // },
  // {
  //   path: 'editar/:id',
  //   component: EdicaoTarefaComponent,
  //   resolve: {
  //     tarefa: visualizarTarefaResolver,
  //   },
  // },
  // {
  //   path: 'excluir/:id',
  //   component: ExclusaoTarefaComponent,
  //   resolve: {
  //     tarefa: visualizarTarefaResolver,
  //   },
  // },
];
