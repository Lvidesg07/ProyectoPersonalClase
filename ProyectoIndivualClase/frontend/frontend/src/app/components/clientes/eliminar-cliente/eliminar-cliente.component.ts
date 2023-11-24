import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {
  cliente: any = {};
  mostrarConfirmacion: boolean = false;
  idCliente: string = ''; // Propiedad para almacenar la ID del cliente

  // constructor(private clienteService: ClienteService) {}

  mostrarDialogoEliminar() {
    // this.mostrarConfirmacion = true;
  }

  ocultarDialogoEliminar() {
    // this.mostrarConfirmacion = false;
  }

  buscarClientePorId() {
    // Implementa la lógica para buscar al cliente por su ID y asignar los datos a this.cliente
  }

  eliminarCliente() {
    // this.clienteService.eliminarCliente(this.cliente.id).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    //   this.ocultarDialogoEliminar();
    // });
  }
}
