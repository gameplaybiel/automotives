import { TestBed } from '@angular/core/testing';

import { AutomotiveService } from './automotive.service';

describe('AutomotiveService', () => {
  let service: AutomotiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomotiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
