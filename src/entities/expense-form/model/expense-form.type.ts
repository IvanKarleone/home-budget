import { FormControl } from '@angular/forms';
import type { IExpense } from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

// TODO move to shared
type SimpleForm<T extends object> = {
  [P in keyof T]: FormControl<T[P]>;
};

export type ExpenseFormValue = Omit<IExpense, 'id' | 'amount' | 'date'> & {
  amount: number | null;
  date: TuiDay | null;
};

export type ExpenseForm = SimpleForm<ExpenseFormValue>;
