import { TestBed } from '@angular/core/testing';

import { AddExpenseFormService } from './add-expense-form.service';

describe('AddExpenseFormService', () => {
  let service: AddExpenseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddExpenseFormService],
    });
    service = TestBed.inject(AddExpenseFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
