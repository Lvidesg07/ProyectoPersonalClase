import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-distribucion',
  templateUrl: './eliminar-distribucion.component.html',
  styleUrls: ['./eliminar-distribucion.component.css']
})
export class EliminarDistribucionComponent {
  distribucionId: string = '';

  // constructor(private distribucionService: DistribucionService) {}

  eliminarDistribucion() {
    // this.distribucionService.eliminarDistribucion(this.distribucionId).subscribe(
    //   () => {
    //     // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    //   },
    //   (error) => {
    //     console.error('Error al eliminar la distribución', error);
    //     // Puedes manejar errores aquí
    //   }
    // );
  }
}
