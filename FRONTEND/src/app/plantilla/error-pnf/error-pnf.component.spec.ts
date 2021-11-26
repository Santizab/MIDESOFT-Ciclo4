import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPNFComponent } from './error-pnf.component';

describe('ErrorPNFComponent', () => {
  let component: ErrorPNFComponent;
  let fixture: ComponentFixture<ErrorPNFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPNFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPNFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
