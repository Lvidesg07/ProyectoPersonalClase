import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/cliente';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-mostrar-compras',
  templateUrl: './mostrar-compras.component.html',
  styleUrls: ['./mostrar-compras.component.css']
})
export class MostrarComprasComponent implements OnInit{
  compras: Compra[] = [];

  constructor(private comprasService: ComprasService) {}

  ngOnInit() {
    this.cargarCompras();
  }

  cargarCompras() {
    this.comprasService.getAllCompras().subscribe(
      (compras) => {
        this.compras = compras;
      }
    );
  }
}
