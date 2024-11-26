import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaColoresComponent } from './captura-colores.component';

describe('CapturaColoresComponent', () => {
  let component: CapturaColoresComponent;
  let fixture: ComponentFixture<CapturaColoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturaColoresComponent]
    });
    fixture = TestBed.createComponent(CapturaColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
