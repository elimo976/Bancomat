import { TestBed } from '@angular/core/testing';

import { SaldoContabileService } from './saldo-contabile.service';

describe('SaldoContabileService', () => {
  let service: SaldoContabileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaldoContabileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
