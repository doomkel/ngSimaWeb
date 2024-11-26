import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaCantidadesTcComponent } from './captura-cantidades-tc.component';

describe('CapturaCantidadesTcComponent', () => {
  let component: CapturaCantidadesTcComponent;
  let fixture: ComponentFixture<CapturaCantidadesTcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturaCantidadesTcComponent]
    });
    fixture = TestBed.createComponent(CapturaCantidadesTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
