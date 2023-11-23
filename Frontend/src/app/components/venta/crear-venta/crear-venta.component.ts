import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta/venta.service';
import { VentaI } from 'src/app/models/venta';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit{

  public form:FormGroup=this.formBuilder.group({
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
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    console.log(formValue);
    this.ventaService.createVenta(formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

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

