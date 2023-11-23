import { Component, OnInit } from '@angular/core';
import { ProductoI } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto/producto.service'
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  public producto:ProductoI[] = []
  public displayedColumns: string[] = ["id", "nombre", "marca","precio","stockMin","cantidad",]
  constructor(
    private productoService: ProductoService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarProductos()
  }

  mostrarProductos() {
    this.productoService.getAllProducto()
      .subscribe({
        next: (data) => {
          this.producto = data.producto
          console.log(this.producto)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/Producto');
    this.productoService.deleteProducto(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Producto Eliminado', life:5000});
        this.mostrarProductos();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/Producto');

      }
    );
  }

  imprimir(id: number){

  }
}
