import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-distribucion',
  templateUrl: './agregar-distribucion.component.html',
  styleUrls: ['./agregar-distribucion.component.css']
})
export class AgregarDistribucionComponent implements OnInit{
  selectedProducto: any;
  selectedProveedor: any;
  cantidad: number = 0;

  productos: any[] = []; // Asegúrate de cargar los productos disponibles
  proveedores: any[] = []; // Asegúrate de cargar los proveedores disponibles

  // constructor(private distribucionService: DistribucionService) {}

  ngOnInit() {
    // Implementa la lógica para cargar productos y proveedores disponibles
  }

  agregarDistribucion() {
    // if (this.selectedProducto && this.selectedProveedor && this.cantidad > 0) {
    //   const nuevaDistribucion = {
    //     producto: this.selectedProducto,
    //     proveedor: this.selectedProveedor,
    //     cantidad_producto: this.cantidad
    //   };

    //   this.distribucionService.agregarDistribucion(nuevaDistribucion).subscribe(
    //     (data: any) => {
    //       // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    //     },
    //     (error) => {
    //       console.error('Error al agregar la distribución', error);
    //       // Puedes manejar errores aquí
    //     }
    //   );
    // }
  }
}
