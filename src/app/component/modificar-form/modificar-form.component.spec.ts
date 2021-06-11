import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarFormComponent } from './modificar-form.component';

describe('ModificarFormComponent', () => {
  let component: ModificarFormComponent;
  let fixture: ComponentFixture<ModificarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
