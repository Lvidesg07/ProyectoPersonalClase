import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-compra',
  templateUrl: './agregar-compra.component.html',
  styleUrls: ['./agregar-compra.component.css']
})

export class AgregarCompraComponent implements OnInit{
  nuevaCompra: any = {};
  clientes: any[] = [];
  productos: any[] = [];

  // constructor(private compraService: CompraService) {}

  ngOnInit() {
    // this.cargarClientes();
    // this.cargarProductos();
  }

  cargarClientes() {
    // Implementa la lógica para cargar la lista de clientes desde tu API Django
    // y asignarla a la propiedad this.clientes
  }

  cargarProductos() {
    // Implementa la lógica para cargar la lista de productos desde tu API Django
    // y asignarla a la propiedad this.productos
  }

  agregarCompra() {
    // this.compraService.agregarCompra(this.nuevaCompra).subscribe((data: any) => {
    //   // Lógica para manejar la respuesta del servicio, por ejemplo, redirección o mensaje de éxito.
    // });
  }
}
