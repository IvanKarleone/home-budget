import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EXPENSE_CATEGORIES,
  EXPENSE_CURRENCIES,
  type ExpenseCategory,
  type ExpenseCurrency,
  type IExpense,
} from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

import { ExpenseForm } from './expense-form.type';

export abstract class ExpenseFormService {
  abstract readonly form: FormGroup<ExpenseForm>;

  abstract getValue(): IExpense;

  protected abstract init(): FormGroup<ExpenseForm>;
}

// TODO
@Injectable()
export class EditExpenseFormService extends ExpenseFormService {
  readonly form = this.init();

  // TODO change logic
  getValue(): IExpense {
    const amount = 0;
    const date = new TuiDay(2000, 0, 1);

    return {
      ...this.form.getRawValue(),
      amount,
      date,
    };
  }

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
