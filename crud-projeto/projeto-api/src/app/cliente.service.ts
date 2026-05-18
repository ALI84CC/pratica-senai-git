import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../app/models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'http://localhost:3000/clientes';

  constructor(private _httpCliente: HttpClient) { }   

  getClientes(): Observable<Cliente[]> {
    return this._httpCliente.get<Cliente[]>(this.url);
  }
}
