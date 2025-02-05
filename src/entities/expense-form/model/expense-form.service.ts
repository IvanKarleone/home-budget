import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BaseFormService,
  EXPENSE_CATEGORIES,
  EXPENSE_CURRENCIES,
  type ExpenseCategory,
  type ExpenseCurrency,
  Form,
} from '@shared/model';

import type { ExpenseFormValue } from './expense-form.type';

@Injectable()
export class ExpenseFormService extends BaseFormService<ExpenseFormValue> {
  protected override init(): FormGroup<Form<ExpenseFormValue>> {
    return new FormGroup<Form<ExpenseFormValue>>({
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
