import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { TipoproductoService } from 'src/app/services/tipoproducto/tipoproducto.service';
import { TipoProductoI } from 'src/app/models/tipoproducto';
import {Message,MessageService} from 'primeng/api';


@Component({
  selector: 'app-actualizar-tipo-producto',
  templateUrl: './actualizar-tipo-producto.component.html',
  styleUrls: ['./actualizar-tipo-producto.component.css']
})
export class ActualizarTipoProductoComponent implements OnInit {
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private tipoproductoService: TipoproductoService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idTipoproducto = this.route.snapshot.paramMap.get("id");
    this.getTipoproducto(this.id);

  }



  getTipoproducto(id: number){
    this.tipoproductoService.getOneTipoproducto(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        
      }
    })
  }

  onSubmit(): void {
    const formValue: TipoProductoI = this.form.value;
    const id: number =  this.form.value.id
    this.tipoproductoService.updateTipoproducto(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Tipoproducto Actualizado', life:5000});

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
