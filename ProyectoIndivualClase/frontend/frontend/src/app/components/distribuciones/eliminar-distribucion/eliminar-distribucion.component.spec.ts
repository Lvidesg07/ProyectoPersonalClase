import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDistribucionComponent } from './eliminar-distribucion.component';

describe('EliminarDistribucionComponent', () => {
  let component: EliminarDistribucionComponent;
  let fixture: ComponentFixture<EliminarDistribucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarDistribucionComponent]
    });
    fixture = TestBed.createComponent(EliminarDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
