import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  cliente: any = {};
  idCliente: Number=0;

  // constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    // Recupera los detalles del cliente que se va a editar y asigna los valores a this.cliente
    // const clienteId = /* obtén el ID del cliente a editar */;
    // this.clienteService.getCliente(clienteId).subscribe((data: any) => {
    //   this.cliente = data;
    // });
  }

  guardarCambios() {
    // Agrega la lógica para guardar los cambios del cliente en el servicio
    // this.clienteService.actualizarCliente(this.cliente).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    // });
  }
  
  buscarClientePorId(){}
}
