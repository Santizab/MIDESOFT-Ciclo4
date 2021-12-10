import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPedidosAsignadosComponent } from './editar-pedidos-asignados.component';

describe('EditarPedidosAsignadosComponent', () => {
  let component: EditarPedidosAsignadosComponent;
  let fixture: ComponentFixture<EditarPedidosAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPedidosAsignadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPedidosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
