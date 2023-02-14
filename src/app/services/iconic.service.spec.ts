import { TestBed } from '@angular/core/testing';

import { IconicService } from './iconic.service';

describe('IconicService', () => {
  let service: IconicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
