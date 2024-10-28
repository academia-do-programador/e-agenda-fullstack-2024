import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of, EMPTY, Observable, throwError, map, catchError } from 'rxjs';
import {
  CompromissoInseridoViewModel,
  InserirCompromissoViewModel,
  ListarCompromissoViewModel,
} from '../models/compromisso.models';

@Injectable({ providedIn: 'root' })
export class CompromissoService {
  private readonly url: string = `${environment.apiUrl}/compromissos`;

  constructor(private http: HttpClient) {}

  public inserir(
    registro: InserirCompromissoViewModel
  ): Observable<CompromissoInseridoViewModel> {
    return this.http
      .post<CompromissoInseridoViewModel>(this.url, registro)
      .pipe(map(this.processarDados), catchError(this.processarFalha));
  }

  public selecionarTodos(): Observable<ListarCompromissoViewModel[]> {
    return this.http
      .get(this.url)
      .pipe(map(this.processarDados), catchError(this.processarFalha));
  }

  private processarDados(resposta: any) {
    if (resposta.sucesso) return resposta.dados;

    return of(EMPTY);
  }

  private processarFalha(resposta: any): Observable<never> {
    return throwError(() => new Error(resposta.error.erros[0]));
  }
}