import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-mostrar-proveedores',
  templateUrl: './mostrar-proveedores.component.html',
  styleUrls: ['./mostrar-proveedores.component.css']
})
export class MostrarProveedoresComponent implements OnInit{
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedoresService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.proveedorService.getAllProveedores().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
      }
    );
  }
}
