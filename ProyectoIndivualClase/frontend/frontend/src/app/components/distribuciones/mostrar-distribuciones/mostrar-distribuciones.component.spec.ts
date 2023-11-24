import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDistribucionesComponent } from './mostrar-distribuciones.component';

describe('MostrarDistribucionesComponent', () => {
  let component: MostrarDistribucionesComponent;
  let fixture: ComponentFixture<MostrarDistribucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarDistribucionesComponent]
    });
    fixture = TestBed.createComponent(MostrarDistribucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
