import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAprobarNotaComponent } from './boton-aprobar-nota.component';

describe('BotonAprobarNotaComponent', () => {
  let component: BotonAprobarNotaComponent;
  let fixture: ComponentFixture<BotonAprobarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonAprobarNotaComponent]
    });
    fixture = TestBed.createComponent(BotonAprobarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
