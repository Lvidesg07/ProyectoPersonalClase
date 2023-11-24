import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDistribucionComponent } from './editar-distribucion.component';

describe('EditarDistribucionComponent', () => {
  let component: EditarDistribucionComponent;
  let fixture: ComponentFixture<EditarDistribucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDistribucionComponent]
    });
    fixture = TestBed.createComponent(EditarDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
