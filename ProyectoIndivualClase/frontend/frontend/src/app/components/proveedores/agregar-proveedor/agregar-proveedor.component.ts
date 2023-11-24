import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent {
  nombre: string = '';
  apellidos: string = '';
  direccion: string = '';
  provincia: string = '';
  telefono: string = '';

  // constructor(private proveedorService: ProveedorService) {}

  agregarProveedor() {
  //   const nuevoProveedor = {
  //     nombre: this.nombre,
  //     apellidos: this.apellidos,
  //     direccion: this.direccion,
  //     provincia: this.provincia,
  //     telefono: this.telefono
  //   };

  //   this.proveedorService.agregarProveedor(nuevoProveedor).subscribe(
  //     (data: any) => {
  //       // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
  //     },
  //     (error) => {
  //       console.error('Error al agregar el proveedor', error);
  //       // Puedes manejar errores aquí
  //     }
  //   );
  }
}
