import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGraficosComponent } from './main-graficos.component';

describe('MainGraficosComponent', () => {
  let component: MainGraficosComponent;
  let fixture: ComponentFixture<MainGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGraficosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
