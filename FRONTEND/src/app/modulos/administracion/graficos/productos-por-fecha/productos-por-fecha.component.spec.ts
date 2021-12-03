import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorFechaComponent } from './productos-por-fecha.component';

describe('ProductosPorFechaComponent', () => {
  let component: ProductosPorFechaComponent;
  let fixture: ComponentFixture<ProductosPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPorFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
