import { Component , OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit{
    opc : MenuItem[] = [];
    ngOnInit(): void {
      this.opc = [
        {
          label: 'Clientes',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Mostrar Clientes',
              icon: 'pi pi-fw pi-users',
              routerLink: '/mostrarClientes'
            },
            {
              label: 'Agregar Cliente',
              icon: 'pi pi-fw pi-user-plus',
              routerLink: '/agregarCliente'
            },
            {
              label: 'Editar Cliente',
              icon: 'pi pi-fw pi-user-edit',
              routerLink: '/editarCliente'
            },
            {
              label: 'Eliminar Cliente',
              icon: 'pi pi-fw pi-user-minus',
              routerLink: '/eliminarCliente'
            }
          ]
        },
        {
          label: 'Compras',
          icon: 'pi pi-fw pi-shopping-cart',
          items: [
            {
              label: 'Mostrar Compras',
              icon: 'pi pi-fw pi-shopping-cart',
              routerLink: '/mostrarCompras'
            },
            {
              label: 'Agregar Compra',
              icon: 'pi pi-fw pi-cart-plus',
              routerLink: '/agregarCompra'
            },
            {
              label: 'Editar Compra',
              icon: 'pi pi-fw pi-pencil',
              routerLink: '/editarCompra'
            },
            {
              label: 'Eliminar Compra',
              icon: 'pi pi-fw pi-trash',
              routerLink: '/eliminarCompra'
            }
          ]
        },
        {
          label: 'Productos',
          icon: 'pi pi-fw pi-shopping-bag',
          items: [
            {
              label: 'Mostrar Productos',
              icon: 'pi pi-fw pi-shopping-bag',
              routerLink: '/mostrarProductos'
            },
            {
              label: 'Agregar Producto',
              icon: 'pi pi-fw pi-plus-circle',
              routerLink: '/agregarProducto'
            },
            {
              label: 'Editar Producto',
              icon: 'pi pi-fw pi-pencil',
              routerLink: '/editarProducto'
            },
            {
              label: 'Eliminar Producto',
              icon: 'pi pi-fw pi-minus-circle',
              routerLink: '/eliminarProducto'
            }
          ]
        },
        {
          label: 'Distribuciones',
          icon: 'pi pi-fw pi-qrcode',
          items: [
            {
              label: 'Mostrar Distribuciones',
              icon: 'pi pi-fw pi-qrcode',
              routerLink: '/mostrarDistribuciones'
            },
            {
              label: 'Agregar Distribucion',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/agregarDistribucion'
            },
            {
              label: 'Editar Distribucion',
              icon: 'pi pi-fw pi-pencil',
              routerLink: '/editarDistribucion'
            },
            {
              label: 'Eliminar Distribucion',
              icon: 'pi pi-fw pi-minus',
              routerLink: '/eliminarDistribucion'
            }
          ]
        },
        {
          label: 'Proveedores',
          icon: 'pi pi-fw pi-building',
          items: [
            {
              label: 'Mostrar Proveedores',
              icon: 'pi pi-fw pi-building',
              routerLink: '/mostrarProveedores'
            },
            {
              label: 'Agregar Proveedor',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/agregarProveedor'
            },
            {
              label: 'Editar Proveedor',
              icon: 'pi pi-fw pi-pencil',
              routerLink: '/editarProveedor'
            },
            {
              label: 'Eliminar Proveedor',
              icon: 'pi pi-fw pi-minus',
              routerLink: '/eliminarProveedor'
            }
          ]
        }
      ];
    }
}
