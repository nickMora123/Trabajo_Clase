import { Component, OnInit } from '@angular/core';
import { TipoProductoI } from 'src/app/models/tipoproducto';
import { Router } from '@angular/router';
import { TipoproductoService } from '../../../services/tipoproducto/tipoproducto.service'
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-tipo-producto',
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css']
})
export class MostrarTipoProductoComponent  implements OnInit {

  public tipoproducto:TipoProductoI[] = []
  public msgs1: Message[]=[];
  public displayedColumns: string[] = ["id", "name" ]
  
  constructor(
    private tipoproductoService: TipoproductoService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarTipoproductos()
  }

  mostrarTipoproductos() {
    this.tipoproductoService.getAllTipo_producto()
      .subscribe({
        next: (data) => {
          this.tipoproducto = data.tipo_producto
          console.log(data)
          console.log(this.tipoproducto)
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/Tipo_Producto');
    this.tipoproductoService.deleteTipoproducto(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Tipo producto Eliminado', life:5000});
        this.mostrarTipoproductos();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/Tipo_Producto');

      }
    );
  }

  imprimir(id: number){

  }

}

