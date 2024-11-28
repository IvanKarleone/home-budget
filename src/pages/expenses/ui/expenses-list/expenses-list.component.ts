import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IExpense } from '@pages/expenses/model/expense/expense.interface';
import { TuiIcon } from '@taiga-ui/core';

import { ExpenseCategoryColorPipe } from '../expense-category-color/expense-category-color.pipe';
import { ExpenseCategoryIconPipe } from '../expense-category-icon/expense-category-icon.pipe';
import { ExpenseCurrencySignPipe } from '../expense-currency-sign/expense-currency-sign.pipe';

@Component({
  selector: 'hb-expenses-list',
  standalone: true,
  imports: [
    NgClass,
    TuiIcon,
    ExpenseCurrencySignPipe,
    ExpenseCategoryIconPipe,
    ExpenseCategoryColorPipe,
  ],
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
