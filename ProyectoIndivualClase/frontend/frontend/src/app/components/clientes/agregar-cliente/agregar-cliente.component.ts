import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {
  nuevoCliente: any = {};

  // constructor(private clienteService: ClienteService) {}

  agregarCliente() {}
  //   this.clienteService.agregarCliente(this.nuevoCliente).subscribe((data: any) => {
  //     // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o actualización de la lista de clientes.
  //   });
  // }
}
