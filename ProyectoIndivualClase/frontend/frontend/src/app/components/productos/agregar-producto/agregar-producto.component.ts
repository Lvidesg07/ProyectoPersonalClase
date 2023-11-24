import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit{
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
    // Implementa la lógica para cargar los proveedores disponibles
  }

  agregarProducto() {
    // this.producto.proveedores = this.selectedProveedores;
    // this.productoService.agregarProducto(this.producto).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    // });
  }
}
