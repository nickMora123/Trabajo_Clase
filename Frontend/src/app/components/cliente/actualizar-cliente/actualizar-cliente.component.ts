import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ClienteI } from 'src/app/models/cliente';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getCliente(this.id);

  }



  getCliente(id: number){
    this.clienteService.getOneCliente(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        
      }
    })
  }

  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    const id: number =  this.form.value.id
    this.clienteService.updateCliente(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

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

  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  get correo() { return this.form.get('correo'); }
  get password() { return this.form.get('password'); }
  get estado() { return this.form.get('password'); }

}
