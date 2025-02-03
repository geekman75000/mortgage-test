import { TestBed } from '@angular/core/testing';

import { MortgageFormServiceService } from './mortgage-form.service.service';

describe('MortgageFormServiceService', () => {
  let service: MortgageFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
