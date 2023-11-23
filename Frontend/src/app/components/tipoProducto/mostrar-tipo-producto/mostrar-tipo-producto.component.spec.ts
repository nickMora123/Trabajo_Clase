import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoProductoComponent } from './mostrar-tipo-producto.component';

describe('MostrarTipoProductoComponent', () => {
  let component: MostrarTipoProductoComponent;
  let fixture: ComponentFixture<MostrarTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarTipoProductoComponent]
    });
    fixture = TestBed.createComponent(MostrarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
