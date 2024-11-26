import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaEstiloComponent } from './captura-estilo.component';

describe('CapturaEstiloComponent', () => {
  let component: CapturaEstiloComponent;
  let fixture: ComponentFixture<CapturaEstiloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturaEstiloComponent]
    });
    fixture = TestBed.createComponent(CapturaEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
