import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { IExpense } from '@pages/expenses/model/expense/expense.interface';
import { ConfirmDialogService } from '@shared/model';
import { DropdownButtonComponent } from '@shared/ui';
import { TuiDataList, TuiIcon } from '@taiga-ui/core';

import { ExpenseCategoryColorPipe } from '../expense-category-color/expense-category-color.pipe';
import { ExpenseCategoryIconPipe } from '../expense-category-icon/expense-category-icon.pipe';
import { ExpenseCurrencySignPipe } from '../expense-currency-sign/expense-currency-sign.pipe';

@Component({
  selector: 'hb-expenses-list-item',
  standalone: true,
  imports: [
    NgClass,
    TuiIcon,
    TuiDataList,
    ExpenseCurrencySignPipe,
    ExpenseCategoryIconPipe,
    ExpenseCategoryColorPipe,
    DropdownButtonComponent,
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
  private readonly confirmDialog = inject(ConfirmDialogService);

  expense = input.required<IExpense>();

  readonly deleteItem = output<void>();

  edit(): void {
    console.log('edit');
  }

  delete(): void {
    this.confirmDialog.openForDelete().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.deleteItem.emit();
      }
    });
  }
}
