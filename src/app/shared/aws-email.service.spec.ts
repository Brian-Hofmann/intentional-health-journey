import { TestBed } from '@angular/core/testing';

import { AwsEmailService } from './aws-email.service';

describe('AwsEmailService', () => {
  let service: AwsEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
