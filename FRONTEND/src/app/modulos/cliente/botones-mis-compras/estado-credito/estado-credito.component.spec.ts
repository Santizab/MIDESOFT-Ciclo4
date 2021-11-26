import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCreditoComponent } from './estado-credito.component';

describe('EstadoCreditoComponent', () => {
  let component: EstadoCreditoComponent;
  let fixture: ComponentFixture<EstadoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
