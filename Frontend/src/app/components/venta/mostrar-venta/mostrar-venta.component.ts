import { Component, OnInit } from '@angular/core';
import { VentaI } from 'src/app/models/venta';
import { Router } from '@angular/router';
import { VentaService } from '../../../services/venta/venta.service'
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-venta',
  templateUrl: './mostrar-venta.component.html',
  styleUrls: ['./mostrar-venta.component.css']
})
export class MostrarVentaComponent implements OnInit{

  public venta:VentaI[] = []
  public displayedColumns: string[] = ["id", "fecha","subtotal","impuestos","descuentos","total","estado",]
  public msgs1: Message[]=[];
  constructor(
    private ventaService: VentaService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarVentas()
  }

  mostrarVentas() {
    this.ventaService.getAllVenta()
      .subscribe({
        next: (data) => {
          this.venta = data.venta
          console.log(this.venta)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/Venta');
    this.ventaService.deleteVenta(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Venta Eliminado', life:5000});
        this.mostrarVentas();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/Venta');

      }
    );
  }

  imprimir(id: number){

  }
}