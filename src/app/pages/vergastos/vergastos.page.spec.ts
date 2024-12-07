import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VergastosPage } from './vergastos.page';

describe('VergastosPage', () => {
  let component: VergastosPage;
  let fixture: ComponentFixture<VergastosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VergastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
