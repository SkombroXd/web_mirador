import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagogastosPage } from './pagogastos.page';

describe('PagogastosPage', () => {
  let component: PagogastosPage;
  let fixture: ComponentFixture<PagogastosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagogastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
