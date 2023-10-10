import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActividadComponent } from './home-actividad.component';

describe('HomeTeenagerComponent', () => {
  let component: HomeActividadComponent;
  let fixture: ComponentFixture<HomeActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeActividadComponent]
    });
    fixture = TestBed.createComponent(HomeActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
