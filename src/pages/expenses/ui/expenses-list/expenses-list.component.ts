import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IExpense } from '@shared/model';

import { ExpensesListItemComponent } from '../expenses-list-item/expenses-list-item.component';

@Component({
  selector: 'hb-expenses-list',
  imports: [ExpensesListItemComponent],
  templateUrl: './expenses-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class ExpensesListComponent {
  expenses = input.required<IExpense[]>();
}
