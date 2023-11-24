import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClientesComponent } from './components/clientes/mostrar-clientes/mostrar-clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';
import { MostrarComprasComponent } from './components/compras/mostrar-compras/mostrar-compras.component';
import { AgregarCompraComponent } from './components/compras/agregar-compra/agregar-compra.component';
import { EditarCompraComponent } from './components/compras/editar-compra/editar-compra.component';
import { EliminarCompraComponent } from './components/compras/eliminar-compra/eliminar-compra.component';
import { MostrarProductosComponent } from './components/productos/mostrar-productos/mostrar-productos.component';
import { AgregarProductoComponent } from './components/productos/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { MostrarDistribucionesComponent } from './components/distribuciones/mostrar-distribuciones/mostrar-distribuciones.component';
import { AgregarDistribucionComponent } from './components/distribuciones/agregar-distribucion/agregar-distribucion.component';
import { EditarDistribucionComponent } from './components/distribuciones/editar-distribucion/editar-distribucion.component';
import { EliminarDistribucionComponent } from './components/distribuciones/eliminar-distribucion/eliminar-distribucion.component';
import { MostrarProveedoresComponent } from './components/proveedores/mostrar-proveedores/mostrar-proveedores.component';
import { AgregarProveedorComponent } from './components/proveedores/agregar-proveedor/agregar-proveedor.component';
import { EliminarProveedorComponent } from './components/proveedores/eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './components/proveedores/editar-proveedor/editar-proveedor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'mostrarClientes',
    component: MostrarClientesComponent
  },
  {
    path: 'agregarCliente',
    component: AgregarClienteComponent
  },
  {
    path: 'editarCliente',
    component: EditarClienteComponent
  },
  {
    path: 'eliminarCliente',
    component: EliminarClienteComponent
  },
  {
    path: 'mostrarCompras',
    component: MostrarComprasComponent
  },
  {
    path: 'agregarCompra',
    component: AgregarCompraComponent
  },
  {
    path: 'editarCompra',
    component: EditarCompraComponent
  },
  {
    path: 'eliminarCompra',
    component: EliminarCompraComponent
  },
  {
    path: 'mostrarProductos',
    component: MostrarProductosComponent
  },
  {
    path: 'agregarProducto',
    component: AgregarProductoComponent
  },
  {
    path: 'editarProducto',
    component: EditarProductoComponent
  },
  {
    path: 'eliminarProducto',
    component: EliminarProductoComponent
  },
  {
    path: 'mostrarDistribuciones',
    component: MostrarDistribucionesComponent
  },
  {
    path: 'agregarDistribucion',
    component: AgregarDistribucionComponent
  },
  {
    path: 'editarDistribucion',
    component: EditarDistribucionComponent
  },
  {
    path: 'eliminarDistribucion',
    component: EliminarDistribucionComponent
  },
  {
    path: 'mostrarProveedores',
    component: MostrarProveedoresComponent
  },
  {
    path: 'agregarProveedor',
    component: AgregarProveedorComponent
  },
  {
    path: 'editarProveedor',
    component: EditarProveedorComponent
  },
  {
    path: 'eliminarProveedor',
    component: EliminarProveedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
