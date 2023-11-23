import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ClienteI } from 'src/app/models/cliente';
import {Message,MessageService} from 'primeng/api';



@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  public form:FormGroup=this.formBuilder.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    password: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,

    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    console.log(formValue);
    this.clienteService.createCliente(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
       
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});
}, 0);

        this.router.navigateByUrl('Cliente');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/Cliente');
  }

  get nombreCliente() { return this.form.get('nombre'); }
  get direccionCliente() { return this.form.get('direccion'); }
  get telefonoCliente() { return this.form.get('telefono'); }
  get correoCliente() { return this.form.get('correo'); }
  get passwordCliente() { return this.form.get('password'); }
  get estado() { return this.form.get('estado'); }

}
