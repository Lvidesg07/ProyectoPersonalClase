import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent {
  productoId: string = '';

  // constructor(private productoService: ProductoService) {}

  eliminarProducto() {
    // this.productoService.eliminarProducto(this.productoId).subscribe(
    //   () => {
    //     // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    //   },
    //   (error) => {
    //     console.error('Error al eliminar el producto', error);
    //     // Puedes manejar errores aquí
    //   }
    // );
  }
}
