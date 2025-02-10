import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DeleteExpenseComponent } from '@features/delete-expense';
import { UpdateExpenseComponent } from '@features/update-expense';
import type { IExpense } from '@shared/model';
import { DropdownButtonComponent } from '@shared/ui';
import { TuiDataList, TuiIcon } from '@taiga-ui/core';

import { ExpenseCategoryColorPipe } from '../expense-category-color/expense-category-color.pipe';
import { ExpenseCategoryIconPipe } from '../expense-category-icon/expense-category-icon.pipe';
import { ExpenseCurrencySignPipe } from '../expense-currency-sign/expense-currency-sign.pipe';

@Component({
  selector: 'hb-expenses-list-item',
  imports: [
    NgClass,
    TuiIcon,
    TuiDataList,
    ExpenseCurrencySignPipe,
    ExpenseCategoryIconPipe,
    ExpenseCategoryColorPipe,
    DropdownButtonComponent,
    UpdateExpenseComponent,
    DeleteExpenseComponent,
  ],
  templateUrl: './expenses-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex w-full justify-between rounded-md border-2 border-solid border-[--tui-border-normal] px-2 py-3 text-sm font-medium lg:text-base',
  },
})
export class ExpensesListItemComponent {
  expense = input.required<IExpense>();
}
