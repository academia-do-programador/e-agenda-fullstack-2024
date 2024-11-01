import { CanMatchFn, Router, Routes, UrlTree } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegistroComponent } from './core/auth/views/registro/registro.component';
import { LoginComponent } from './core/auth/views/login/login.component';
import { inject } from '@angular/core';
import { UsuarioService } from './core/auth/services/usuario.service';
import { map, Observable } from 'rxjs';
import { contatosRoutes } from './views/contatos/contatos.routes';
import { compromissosRoutes } from './views/compromissos/compromissos.routes';
import { categoriasRoutes } from './views/categorias/categorias.routes';
import { despesasRoutes } from './views/despesas/despesas.routes';
import { tarefasRoutes } from './views/tarefas/tarefas.routes';

const authGuard: CanMatchFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const usuarioService = inject(UsuarioService);

  return usuarioService.usuarioAutenticado.pipe(
    map((usuario) => {
      if (!usuario) return router.parseUrl('/login');

      return true;
    })
  );
};

const authUserGuard: CanMatchFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const usuarioService = inject(UsuarioService);

  return usuarioService.usuarioAutenticado.pipe(
    map((usuario) => {
      if (usuario) return router.parseUrl('/dashboard');

      return true;
    })
  );
};

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./views/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canMatch: [authGuard],
  },

  {
    path: 'registro',
    loadComponent: () =>
      import('./core/auth/views/registro/registro.component').then(
        (m) => m.RegistroComponent
      ),
    canMatch: [authUserGuard],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/views/login/login.component').then(
        (m) => m.LoginComponent
      ),
    canMatch: [authUserGuard],
  },

  {
    path: 'contatos',
    loadChildren: () =>
      import('./views/contatos/contatos.routes').then((m) => m.contatosRoutes),
    canMatch: [authGuard],
  },

  {
    path: 'compromissos',
    loadChildren: () =>
      import('./views/compromissos/compromissos.routes').then(
        (m) => m.compromissosRoutes
      ),
    canMatch: [authGuard],
  },

  {
    path: 'categorias',
    loadChildren: () =>
      import('./views/categorias/categorias.routes').then(
        (m) => m.categoriasRoutes
      ),
    canMatch: [authGuard],
  },

  {
    path: 'despesas',
    loadChildren: () =>
      import('./views/despesas/despesas.routes').then((m) => m.despesasRoutes),
    canMatch: [authGuard],
  },

  {
    path: 'tarefas',
    loadChildren: () =>
      import('./views/tarefas/tarefas.routes').then((m) => m.tarefasRoutes),
    canMatch: [authGuard],
  },
];
