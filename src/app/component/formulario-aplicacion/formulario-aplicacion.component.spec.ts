import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAplicacionComponent } from './formulario-aplicacion.component';

describe('FormularioAplicacionComponent', () => {
  let component: FormularioAplicacionComponent;
  let fixture: ComponentFixture<FormularioAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
