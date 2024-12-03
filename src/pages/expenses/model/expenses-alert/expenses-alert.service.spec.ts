import { TestBed } from '@angular/core/testing';

import { ExpensesAlertService } from './expenses-alert.service';

describe('ExpensesAlertService', () => {
  let service: ExpensesAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpensesAlertService],
    });
    service = TestBed.inject(ExpensesAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
