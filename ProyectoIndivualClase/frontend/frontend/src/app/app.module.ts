import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ContentComponent } from './components/layouts/content/content.component';
import { AsideComponent } from './components/layouts/aside/aside.component';
import { MostrarClientesComponent } from './components/clientes/mostrar-clientes/mostrar-clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';
import { MostrarComprasComponent } from './components/compras/mostrar-compras/mostrar-compras.component';
import { AgregarCompraComponent } from './components/compras/agregar-compra/agregar-compra.component';
import { EditarCompraComponent } from './components/compras/editar-compra/editar-compra.component';
import { EliminarCompraComponent } from './components/compras/eliminar-compra/eliminar-compra.component';
import { DropdownModule } from 'primeng/dropdown';
import { MostrarProductosComponent } from './components/productos/mostrar-productos/mostrar-productos.component';
import { AgregarProductoComponent } from './components/productos/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { MostrarDistribucionesComponent } from './components/distribuciones/mostrar-distribuciones/mostrar-distribuciones.component';
import { EliminarDistribucionComponent } from './components/distribuciones/eliminar-distribucion/eliminar-distribucion.component';
import { AgregarDistribucionComponent } from './components/distribuciones/agregar-distribucion/agregar-distribucion.component';
import { EditarDistribucionComponent } from './components/distribuciones/editar-distribucion/editar-distribucion.component';
import { MostrarProveedoresComponent } from './components/proveedores/mostrar-proveedores/mostrar-proveedores.component';
import { AgregarProveedorComponent } from './components/proveedores/agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './components/proveedores/editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from './components/proveedores/eliminar-proveedor/eliminar-proveedor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AsideComponent,
    MostrarClientesComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    MostrarComprasComponent,
    AgregarCompraComponent,
    EditarCompraComponent,
    EliminarCompraComponent,
    MostrarProductosComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    MostrarDistribucionesComponent,
    EliminarDistribucionComponent,
    AgregarDistribucionComponent,
    EditarDistribucionComponent,
    MostrarProveedoresComponent,
    AgregarProveedorComponent,
    EditarProveedorComponent,
    EliminarProveedorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelMenuModule,
    TableModule,
    FormsModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
