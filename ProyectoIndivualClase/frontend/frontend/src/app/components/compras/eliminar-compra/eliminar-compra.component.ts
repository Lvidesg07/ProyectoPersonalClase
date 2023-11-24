import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-compra',
  templateUrl: './eliminar-compra.component.html',
  styleUrls: ['./eliminar-compra.component.css']
})
export class EliminarCompraComponent {
  idCompraBusqueda: string = '';
  compra: any = {};
  compraEncontrada: boolean = false;

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

  eliminarCompra() {
    // this.compraService.eliminarCompra(this.compra.id).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    // });
  }
}
