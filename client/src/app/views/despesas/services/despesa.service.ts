import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DespesaService {
  private readonly url: string = `${environment.apiUrl}/despesas`;

  constructor(private http: HttpClient) {}
}
