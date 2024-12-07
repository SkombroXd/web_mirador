import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpendientesPage } from './gpendientes.page';

describe('GpendientesPage', () => {
  let component: GpendientesPage;
  let fixture: ComponentFixture<GpendientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GpendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
