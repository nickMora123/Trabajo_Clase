import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoProductoComponent } from './actualizar-tipo-producto.component';

describe('ActualizarTipoProductoComponent', () => {
  let component: ActualizarTipoProductoComponent;
  let fixture: ComponentFixture<ActualizarTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTipoProductoComponent]
    });
    fixture = TestBed.createComponent(ActualizarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
