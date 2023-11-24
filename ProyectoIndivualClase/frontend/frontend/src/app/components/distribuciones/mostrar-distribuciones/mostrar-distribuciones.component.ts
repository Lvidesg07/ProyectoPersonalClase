import { Component, OnInit } from '@angular/core';
import { Distribucion } from 'src/app/models/producto';
import { DistribucionesService } from 'src/app/services/distribuciones.service';

@Component({
  selector: 'app-mostrar-distribuciones',
  templateUrl: './mostrar-distribuciones.component.html',
  styleUrls: ['./mostrar-distribuciones.component.css']
})
export class MostrarDistribucionesComponent implements OnInit{
  distribuciones: Distribucion[] = [];

  constructor(private distribucionService: DistribucionesService) {}

  ngOnInit() {
    this.cargarDistribuciones();
  }

  cargarDistribuciones() {
    this.distribucionService.getAllDistribuciones().subscribe(
      (distribuciones) => {
        this.distribuciones = distribuciones;
      }
    );
  }
}
