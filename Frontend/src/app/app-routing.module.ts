import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';

import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from "./components/producto/crear-producto/crear-producto.component";
import { ActualizarProductoComponent } from "./components/producto/actualizar-producto/actualizar-producto.component";

import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';

import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';
import { CrearVentaComponent } from './components/venta/crear-venta/crear-venta.component';
import { ActualizarVentaComponent } from './components/venta/actualizar-venta/actualizar-venta.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  
  {
    path: "Cliente",
    component: MostrarClienteComponent
  },
  {
    path: "addclientes",
    component: CrearClienteComponent
  },
  {
    path: "Cliente/edit/:id",
    component: ActualizarClienteComponent
  },


  {
    path: "tipoproductos",
    component: MostrarTipoProductoComponent
  },
  {
    path: "addtipoproductos",
    component: CrearTipoProductoComponent
  },
  {
    path: "tipoproductos/edit/:id",
    component: ActualizarTipoProductoComponent
  },





  {
    path: "Producto",
    component: MostrarProductoComponent
  },
  {
    path: "addproductos",
    component: CrearProductoComponent
  },
  {
    path: "Producto/edit/:id",
    component: ActualizarProductoComponent
  },
  {
    path: "Producto/edit/:id",
    component: ActualizarProductoComponent
  },



  {
    path: "Venta",
    component: MostrarVentaComponent
  },
  {
    path: "addventas",
    component: CrearVentaComponent
  },
  {
    path: "Venta/edit/:id",
    component: ActualizarVentaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
