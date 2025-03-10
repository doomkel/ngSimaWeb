import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrenotasComponent } from './tabla-prenotas.component';

describe('TablaPrenotasComponent', () => {
  let component: TablaPrenotasComponent;
  let fixture: ComponentFixture<TablaPrenotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPrenotasComponent]
    });
    fixture = TestBed.createComponent(TablaPrenotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
