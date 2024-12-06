import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { type ExpenseForm, ExpenseFormService } from '@entities/expense-form';
import {
  EXPENSE_CATEGORIES,
  EXPENSE_CURRENCIES,
  type ExpenseCategory,
  type ExpenseCurrency,
  type IExpense,
} from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

@Injectable()
export class AddExpenseService extends ExpenseFormService {
  readonly form = this.init();

  getValue(): IExpense {
    const amount = this.form.getRawValue().amount ?? 0;
    const date = this.form.getRawValue().date ?? new TuiDay(2000, 0, 1);

    return {
      ...this.form.getRawValue(),
      amount,
      date,
    };
  }

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
