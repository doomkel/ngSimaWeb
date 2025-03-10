import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasNotasComponent } from './graficas-notas.component';

describe('GraficasNotasComponent', () => {
  let component: GraficasNotasComponent;
  let fixture: ComponentFixture<GraficasNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasNotasComponent]
    });
    fixture = TestBed.createComponent(GraficasNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
