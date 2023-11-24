import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.css']
})
export class EliminarProveedorComponent {
  proveedorId: string = '';

  // constructor(private proveedorService: ProveedorService) {}

  eliminarProveedor() {
    // this.proveedorService.eliminarProveedor(this.proveedorId).subscribe(
    //   () => {
    //     // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    //   },
    //   (error) => {
    //     console.error('Error al eliminar el proveedor', error);
    //     // Puedes manejar errores aquí
    //   }
    // );
  }
}
