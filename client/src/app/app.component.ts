import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';
import { Observable } from 'rxjs';
import { UsuarioTokenViewModel } from './core/auth/models/auth.models';
import { AsyncPipe } from '@angular/common';
import { UsuarioService } from './core/auth/services/usuario.service';
import { NotificacaoService } from './core/notificacao/notificacao.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ShellComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  usuarioAutenticado$?: Observable<UsuarioTokenViewModel | undefined>;

  constructor(
    private usuarioService: UsuarioService,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.usuarioAutenticado$ = this.usuarioService.usuarioAutenticado;
  }

  efetuarLogout() {
    this.usuarioService.logout();

    this.notificacaoService.sucesso('Logout realizado com sucesso!');
  }
}
