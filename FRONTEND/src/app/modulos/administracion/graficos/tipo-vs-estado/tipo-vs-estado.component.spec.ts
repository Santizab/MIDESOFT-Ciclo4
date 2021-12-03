import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVsEstadoComponent } from './tipo-vs-estado.component';

describe('TipoVsEstadoComponent', () => {
  let component: TipoVsEstadoComponent;
  let fixture: ComponentFixture<TipoVsEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVsEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVsEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
