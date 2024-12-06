import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EXPENSE_CATEGORIES,
  EXPENSE_CURRENCIES,
  type ExpenseCategory,
  type ExpenseCurrency,
} from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

import type { ExpenseForm, ExpenseFormValue } from './expense-form.type';

export abstract class ExpenseFormService {
  readonly form: FormGroup<ExpenseForm> = this.init();

  getValue(): ExpenseFormValue {
    return this.form.getRawValue();
  }

  protected abstract init(): FormGroup<ExpenseForm>;
}

@Injectable()
export class EditExpenseFormService extends ExpenseFormService {
  // TODO change logic
  protected init(): FormGroup<ExpenseForm> {
    return new FormGroup<ExpenseForm>({
      amount: new FormControl(1, [Validators.required]),
      date: new FormControl(new TuiDay(2022, 2, 2), [Validators.required]),
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
