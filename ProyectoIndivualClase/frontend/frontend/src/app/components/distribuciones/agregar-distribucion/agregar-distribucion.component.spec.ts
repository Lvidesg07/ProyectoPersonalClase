import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDistribucionComponent } from './agregar-distribucion.component';

describe('AgregarDistribucionComponent', () => {
  let component: AgregarDistribucionComponent;
  let fixture: ComponentFixture<AgregarDistribucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarDistribucionComponent]
    });
    fixture = TestBed.createComponent(AgregarDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
