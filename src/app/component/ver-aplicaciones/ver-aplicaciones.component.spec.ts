import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAplicacionesComponent } from './ver-aplicaciones.component';

describe('VerAplicacionesComponent', () => {
  let component: VerAplicacionesComponent;
  let fixture: ComponentFixture<VerAplicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAplicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
