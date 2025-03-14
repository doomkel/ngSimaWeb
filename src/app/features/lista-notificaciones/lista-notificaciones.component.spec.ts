import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNotificacionesComponent } from './lista-notificaciones.component';

describe('ListaNotificacionesComponent', () => {
  let component: ListaNotificacionesComponent;
  let fixture: ComponentFixture<ListaNotificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNotificacionesComponent]
    });
    fixture = TestBed.createComponent(ListaNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
