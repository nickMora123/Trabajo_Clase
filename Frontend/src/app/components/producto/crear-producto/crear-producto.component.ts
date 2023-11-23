import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProductoI } from 'src/app/models/producto';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {


  public form:FormGroup=this.formBuilder.group({
    nombre: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stockMin: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    
    
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private messageService: MessageService,

    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: ProductoI = this.form.value;
    console.log(formValue);
    this.productoService.createProducto(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');

        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Producto Creado', life:5000});
          }, 0);

        this.router.navigateByUrl('Producto');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/Producto');
  }

  get nombre() { return this.form.get('nombre'); }
  get marca() { return this.form.get('marca'); }
  get precio() { return this.form.get('precio'); }
  get stockMin() { return this.form.get('stockMin'); }
  get cantidad() { return this.form.get('Cantidad'); }



}

