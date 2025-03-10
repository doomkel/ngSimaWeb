import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidarComponent } from './consolidar.component';

describe('ConsolidarComponent', () => {
  let component: ConsolidarComponent;
  let fixture: ComponentFixture<ConsolidarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsolidarComponent]
    });
    fixture = TestBed.createComponent(ConsolidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
