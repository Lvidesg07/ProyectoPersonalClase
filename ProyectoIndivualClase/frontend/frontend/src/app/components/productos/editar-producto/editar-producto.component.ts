import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  producto: any = {
    descripcion: '',
    precio: 0,
    stock: 0,
    proveedores: []
  };
  selectedProveedores: any[] = [];
  proveedores: any[] = []; // Asegúrate de cargar los proveedores disponibles

  // constructor(private productoService: ProductoService) {}

  ngOnInit() {
    // Implementa la lógica para cargar el producto a editar
  }

  guardarCambios() {
    // this.producto.proveedores = this.selectedProveedores;
    // this.productoService.actualizarProducto(this.producto).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    // });
  }
}
