import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-distribucion',
  templateUrl: './editar-distribucion.component.html',
  styleUrls: ['./editar-distribucion.component.css']
})
export class EditarDistribucionComponent implements OnInit{
  distribucion: any = {
    producto: { descripcion: '' },
    proveedor: { nombre: '' },
    cantidad_producto: 0
  };

  // constructor(private distribucionService: DistribucionService) {}

  ngOnInit() {
    // Implementa la lógica para cargar la distribución a editar
  }

  guardarCambios() {
    // this.distribucionService.actualizarDistribucion(this.distribucion).subscribe(
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
