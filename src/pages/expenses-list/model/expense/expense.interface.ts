import { ExpenseCategory } from './expense-category.types';
import { ExpenseCurrency } from './expense-currency.types';

export interface IExpense {
  amount: number;
  date: Date;
  currency: ExpenseCurrency;
  category: ExpenseCategory;
}
