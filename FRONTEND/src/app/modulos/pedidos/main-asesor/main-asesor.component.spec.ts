import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAsesorComponent } from './main-asesor.component';

describe('MainAsesorComponent', () => {
  let component: MainAsesorComponent;
  let fixture: ComponentFixture<MainAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
