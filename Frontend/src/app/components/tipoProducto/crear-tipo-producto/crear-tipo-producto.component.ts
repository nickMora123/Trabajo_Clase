import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoproductoService } from 'src/app/services/tipoproducto/tipoproducto.service';
import { TipoProductoI } from 'src/app/models/tipoproducto';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-crear-tipo-producto',
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css']
})
export class CrearTipoProductoComponent implements OnInit {

  public form:FormGroup=this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private tipoproductoService: TipoproductoService,
    private messageService: MessageService,

    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: TipoProductoI = this.form.value;
    console.log(formValue);
    this.tipoproductoService.createTipoproducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
       
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Tipoproducto Creado', life:5000});
}, 0);

        this.router.navigateByUrl('tipoproductos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/tipoproductos');
  }

  get name() { return this.form.get('name'); }
}

