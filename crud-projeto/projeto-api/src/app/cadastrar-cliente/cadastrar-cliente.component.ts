import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente.model';
import { Router, RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent implements OnInit {
  public novoCliente:  Cliente ={
    id: 0,
    nome: '',
    email: '',
    telefone: '' 
  };

   constructor(
    private _clienteService: ClienteService, 
    private _router: Router
  ) {}

   ngOnInit(): void {
  }

  salvarCliente(): void {
    this._clienteService.cadastrarCliente(this.novoCliente)
    .subscribe(
      {
        next:(cliente) => {
          alert(cliente);
          this._router.navigate(['listar-clientes']);
        },
        error:(erro) => {
          console.error('Erro ao cadastrar cliente:', erro);
        }
      }
    )
  }
}
