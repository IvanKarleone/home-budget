import type { IExpense } from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

export type ExpenseFormValue = Omit<IExpense, 'id' | 'amount' | 'date'> & {
  amount: number | null;
  date: TuiDay | null;
};
