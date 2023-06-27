import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropiedadComponent } from './edit-propiedad.component';

describe('EditPropiedadComponent', () => {
  let component: EditPropiedadComponent;
  let fixture: ComponentFixture<EditPropiedadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPropiedadComponent]
    });
    fixture = TestBed.createComponent(EditPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
