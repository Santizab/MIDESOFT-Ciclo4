import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPorClienteComponent } from './solicitudes-por-cliente.component';

describe('SolicitudesPorClienteComponent', () => {
  let component: SolicitudesPorClienteComponent;
  let fixture: ComponentFixture<SolicitudesPorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPorClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
