import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent {
  idCompraBusqueda: string = '';
  compra: any = {};
  compraEncontrada: boolean = false;
  productos:any[] = [];
  clientes:any[] = [];

  // constructor(private compraService: CompraService) {}

  buscarCompraPorId() {
    // this.compraService.getCompraPorId(this.idCompraBusqueda).subscribe((data: any) => {
    //   if (data) {
    //     this.compra = data;
    //     this.compraEncontrada = true;
    //   } else {
    //     this.compraEncontrada = false;
    //     // Puedes manejar el caso cuando no se encuentra la compra
    //   }
    // });
  }

  guardarCambiosCompra() {
    // this.compraService.actualizarCompra(this.compra).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    // });
  }
}
