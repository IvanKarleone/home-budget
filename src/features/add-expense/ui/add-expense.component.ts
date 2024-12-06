import { ChangeDetectionStrategy, Component, inject, TemplateRef } from '@angular/core';
import {
  ExpenseFormComponent,
  type ExpenseFormValue,
  mapExpenseFormValueToNewExpense,
} from '@entities/expense-form';
import { ExpensesStorageService } from '@shared/api';
import { ExpenseAlertService, ModalDialogService } from '@shared/model';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'hb-add-expense',
  standalone: true,
  imports: [TuiButton, ExpenseFormComponent],
  templateUrl: './add-expense.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {
  private readonly modalDialog = inject(ModalDialogService);
  private readonly expensesStorage = inject(ExpensesStorageService);
  private readonly expenseAlert = inject(ExpenseAlertService);

  openModalDialog(form: TemplateRef<unknown>): void {
    this.modalDialog.open('Add expense', form);
  }

  add(expenseFormValue: ExpenseFormValue): void {
    const expense = mapExpenseFormValueToNewExpense(expenseFormValue);

    this.expensesStorage.add(expense);
    this.expenseAlert.afterAdd(expense.amount, expense.currency);
    this.modalDialog.close();
  }
}
