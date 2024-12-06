import { TuiDay } from '@taiga-ui/cdk';

import type { ExpenseCategory } from './expense-category.types';
import type { ExpenseCurrency } from './expense-currency.types';

export interface IExpense {
  id: string;
  amount: number;
  date: TuiDay;
  currency: ExpenseCurrency;
  category: ExpenseCategory;
}
