import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IExpense } from '@pages/expenses/model/expense/expense.interface';

import { ExpensesListItemComponent } from '../expenses-list-item/expenses-list-item.component';

@Component({
  selector: 'hb-expenses-list',
  standalone: true,
  imports: [ExpensesListItemComponent],
  templateUrl: './expenses-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full md:w-3/4 lg:w-1/2 xl:w-1/3',
  },
})
export class ExpensesListComponent {
  expenses = input.required<IExpense[]>();

  readonly deleteExpense = output<number>();
}
