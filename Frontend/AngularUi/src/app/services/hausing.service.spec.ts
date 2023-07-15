import { TestBed } from '@angular/core/testing';

import { HausingService } from './hausing.service';

describe('HausingService', () => {
  let service: HausingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HausingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
