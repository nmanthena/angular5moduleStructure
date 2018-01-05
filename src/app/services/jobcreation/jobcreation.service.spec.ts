import { TestBed, inject } from '@angular/core/testing';

import { JobcreationService } from './jobcreation.service';

describe('JobcreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobcreationService]
    });
  });

  it('should be created', inject([JobcreationService], (service: JobcreationService) => {
    expect(service).toBeTruthy();
  }));
});
