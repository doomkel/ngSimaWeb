import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaNotasComponent } from './consulta-notas.component';

describe('ConsultaNotasComponent', () => {
  let component: ConsultaNotasComponent;
  let fixture: ComponentFixture<ConsultaNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaNotasComponent]
    });
    fixture = TestBed.createComponent(ConsultaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
