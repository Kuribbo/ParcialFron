import { TestBed } from '@angular/core/testing';

import { CelularServiceService } from './celular-service.service';

describe('CelularServiceService', () => {
  let service: CelularServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelularServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
