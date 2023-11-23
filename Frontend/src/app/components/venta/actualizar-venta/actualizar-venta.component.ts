import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { VentaService } from 'src/app/services/venta/venta.service';
import { VentaI } from 'src/app/models/venta';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-actualizar-venta',
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.css']
})
export class ActualizarVentaComponent implements OnInit {

  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    fecha: ['', [Validators.required]],
    subtotal: ['', [Validators.required]],
    impuestos: ['', [Validators.required]],
    descuentos: ['', [Validators.required]],
    total: ['', [Validators.required]],
    estado: ['', [Validators.required]],
 
  });

  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentaService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idVenta = this.route.snapshot.paramMap.get("id");
    this.getVenta(this.id);

  }



  getVenta(id: number){
    this.ventaService.getOneVenta(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.venta)
      }
    })
  }

  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    const id: number =  this.form.value.id
    this.ventaService.updateVenta(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Venta Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('Venta');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/Venta');
  }

  get fecha() { return this.form.get('fecha'); }
  get subtotal() { return this.form.get('subtotal'); }
  get impuestos() { return this.form.get('impuestos'); }
  get descuentos() { return this.form.get('descuentos'); }
  get total() { return this.form.get('total'); }
  get estado() { return this.form.get('estado'); }

}