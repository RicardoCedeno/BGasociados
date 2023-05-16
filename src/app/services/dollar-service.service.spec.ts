import { TestBed } from '@angular/core/testing';

import { DollarServiceService } from './dollar-service.service';

describe('DollarServiceService', () => {
  let service: DollarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DollarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
