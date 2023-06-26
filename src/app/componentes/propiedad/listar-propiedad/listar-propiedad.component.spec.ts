import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropiedadComponent } from './listar-propiedad.component';

describe('ListarPropiedadComponent', () => {
  let component: ListarPropiedadComponent;
  let fixture: ComponentFixture<ListarPropiedadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPropiedadComponent]
    });
    fixture = TestBed.createComponent(ListarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
