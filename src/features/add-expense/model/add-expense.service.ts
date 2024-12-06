import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { type ExpenseForm, ExpenseFormService } from '@entities/expense-form';
import {
  EXPENSE_CATEGORIES,
  EXPENSE_CURRENCIES,
  type ExpenseCategory,
  type ExpenseCurrency,
} from '@shared/model';

@Injectable()
export class AddExpenseService extends ExpenseFormService {
  protected init(): FormGroup<ExpenseForm> {
    return new FormGroup<ExpenseForm>({
      amount: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      currency: new FormControl<ExpenseCurrency>(EXPENSE_CURRENCIES[0], {
        nonNullable: true,
        validators: [Validators.required],
      }),
      category: new FormControl<ExpenseCategory>(EXPENSE_CATEGORIES[0], {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
