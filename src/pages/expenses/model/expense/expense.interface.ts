import { TuiDay } from '@taiga-ui/cdk';

import { ExpenseCategory } from './expense-category.types';
import { ExpenseCurrency } from './expense-currency.types';

export interface IExpense {
  amount: number;
  date: TuiDay;
  currency: ExpenseCurrency;
  category: ExpenseCategory;
}
