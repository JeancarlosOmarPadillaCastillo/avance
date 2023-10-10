import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFormComponent } from './actividad-form.component';

describe('TeenagerFormComponent', () => {
  let component: ActividadFormComponent;
  let fixture: ComponentFixture<ActividadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadFormComponent]
    });
    fixture = TestBed.createComponent(ActividadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
