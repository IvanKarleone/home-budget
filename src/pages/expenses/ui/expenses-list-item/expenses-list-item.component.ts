import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IExpense } from '@pages/expenses/model/expense/expense.interface';
import { TuiIcon } from '@taiga-ui/core';

import { ExpenseCategoryColorPipe } from '../expense-category-color/expense-category-color.pipe';
import { ExpenseCategoryIconPipe } from '../expense-category-icon/expense-category-icon.pipe';
import { ExpenseCurrencySignPipe } from '../expense-currency-sign/expense-currency-sign.pipe';

@Component({
  selector: 'hb-expenses-list-item',
  standalone: true,
  imports: [
    NgClass,
    TuiIcon,
    ExpenseCurrencySignPipe,
    ExpenseCategoryIconPipe,
    ExpenseCategoryColorPipe,
  ],
  templateUrl: './expenses-list-item.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesListItemComponent {
  expense = input.required<IExpense>();
}
