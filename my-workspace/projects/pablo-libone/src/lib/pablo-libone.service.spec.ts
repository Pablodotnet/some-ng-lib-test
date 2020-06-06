import { TestBed } from '@angular/core/testing';

import { PabloLiboneService } from './pablo-libone.service';

describe('PabloLiboneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PabloLiboneService = TestBed.get(PabloLiboneService);
    expect(service).toBeTruthy();
  });
});
