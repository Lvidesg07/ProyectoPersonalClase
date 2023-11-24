import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit{
  nombre: string = '';
  apellidos: string = '';
  direccion: string = '';
  provincia: string = '';
  telefono: string = '';

  // constructor(private proveedorService: ProveedorService) {}

  ngOnInit() {
    // Implementa la lógica para cargar el proveedor a editar
  }

  guardarCambios() {
    // const proveedorEditado = {
    //   nombre: this.nombre,
    //   apellidos: this.apellidos,
    //   direccion: this.direccion,
    //   provincia: this.provincia,
    //   telefono: this.telefono
    // };

    // this.proveedorService.actualizarProveedor(proveedorEditado).subscribe(
    //   (data: any) => {
    //     // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    //   },
    //   (error) => {
    //     console.error('Error al guardar los cambios', error);
    //     // Puedes manejar errores aquí
    //   }
    // );
  }
}
