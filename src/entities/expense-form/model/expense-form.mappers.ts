import { IExpense } from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

import { ExpenseFormValue } from './expense-form.type';

export function mapExpenseFormValueToNewExpense(expenseFormValue: ExpenseFormValue): IExpense {
  if (expenseFormValue.amount === null || expenseFormValue.date === null) {
    throw new Error('Expense amount or date is empty during convertation from ExpenseFormValue');
  }

  return {
    id: crypto.randomUUID(),
    amount: expenseFormValue.amount ?? 0,
    date: expenseFormValue.date ?? new TuiDay(2000, 0, 1),
    currency: expenseFormValue.currency,
    category: expenseFormValue.category,
  };
}
