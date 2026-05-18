import { Component,OnInit  } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-cliente',
  imports: [],
  standalone: true,
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent implements OnInit {
  public clientes: Cliente[] = [];
 
 constructor(
    private _clienteService: ClienteService, 
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe(
      retornaClientes => {
        this.clientes = retornaClientes.map(item => {
          return {
            id: item.id,
            nome: item.nome,
            email: item.email,
            telefone: item.telefone
          }
        })
      }
    )
  }
}
