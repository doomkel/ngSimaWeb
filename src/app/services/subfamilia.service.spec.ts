import { TestBed } from '@angular/core/testing';

import { SubfamiliaService } from './subfamilia.service';

describe('SubfamiliaService', () => {
  let service: SubfamiliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubfamiliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
