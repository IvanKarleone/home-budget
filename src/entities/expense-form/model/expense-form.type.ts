import { FormControl } from '@angular/forms';
import type { IExpense } from '@shared/model';
import { TuiDay } from '@taiga-ui/cdk';

// TODO move to shared
type SimpleForm<T extends object> = {
  [P in keyof T]: FormControl<T[P]>;
};

export type ExpenseForm = Omit<SimpleForm<IExpense>, 'amount' | 'date'> & {
  amount: FormControl<number | null>;
  date: FormControl<TuiDay | null>;
};
