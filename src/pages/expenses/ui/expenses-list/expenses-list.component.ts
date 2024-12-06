import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IExpense } from '@shared/model';

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
}
