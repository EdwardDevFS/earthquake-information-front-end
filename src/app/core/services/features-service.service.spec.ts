import { TestBed } from '@angular/core/testing';

import { FeaturesServiceService } from './features-service.service';

describe('FeaturesServiceService', () => {
  let service: FeaturesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
