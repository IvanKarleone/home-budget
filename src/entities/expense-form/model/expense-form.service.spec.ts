import { TestBed } from '@angular/core/testing';

import { ExpenseFormService } from './expense-form.service';

describe('ExpenseFormService', () => {
  let service: ExpenseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseFormService],
    });
    service = TestBed.inject(ExpenseFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
