import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EXPENSE_CATEGORIES,
  EXPENSE_CURRENCIES,
  type ExpenseCategory,
  type ExpenseCurrency,
} from '@shared/model';

import type { ExpenseForm, ExpenseFormValue } from './expense-form.type';

@Injectable()
export class ExpenseFormService {
  readonly form = this.init();

  getValue(): ExpenseFormValue {
    return this.form.getRawValue();
  }

  setValue(formValue: ExpenseFormValue): void {
    this.form.setValue(formValue);
  }

  private init(): FormGroup<ExpenseForm> {
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
