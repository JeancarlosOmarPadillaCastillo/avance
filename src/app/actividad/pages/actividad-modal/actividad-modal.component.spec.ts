import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadModalComponent } from './actividad-modal.component';

describe('AdolescenteModalComponent', () => {
  let component: ActividadModalComponent;
  let fixture: ComponentFixture<ActividadModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadModalComponent]
    });
    fixture = TestBed.createComponent(ActividadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
