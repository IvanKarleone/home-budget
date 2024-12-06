import { TestBed } from '@angular/core/testing';

import { ExpenseAlertService } from './expense-alert.service';

describe('ExpenseAlertService', () => {
  let service: ExpenseAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
