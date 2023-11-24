import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit{
  clientes: Cliente[] = [];// Asegúrate de que este arreglo tenga los datos de los clientes.

  constructor(private clienteService: ClienteService
  ,private router:Router) {
  }

  ngOnInit() {
    this.clienteService.getAllCliente()
      .subscribe(
        (clientes) => {
          this.clientes = clientes 
    })
  }
}