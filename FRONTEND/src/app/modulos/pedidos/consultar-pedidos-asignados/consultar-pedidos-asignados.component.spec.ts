import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPedidosAsignadosComponent } from './consultar-pedidos-asignados.component';

describe('ConsultarPedidosAsignadosComponent', () => {
  let component: ConsultarPedidosAsignadosComponent;
  let fixture: ComponentFixture<ConsultarPedidosAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPedidosAsignadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPedidosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
