import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCapturaComponent } from './tabla-captura.component';

describe('TablaCapturaComponent', () => {
  let component: TablaCapturaComponent;
  let fixture: ComponentFixture<TablaCapturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCapturaComponent]
    });
    fixture = TestBed.createComponent(TablaCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
