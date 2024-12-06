import { ChangeDetectionStrategy, Component, inject, TemplateRef } from '@angular/core';
import { ExpenseFormComponent, ExpenseFormService } from '@entities/expense-form';
import { ExpensesStorageService } from '@shared/api';
import { ExpenseAlertService, type IExpense, ModalDialogService } from '@shared/model';
import { TuiButton } from '@taiga-ui/core';

import { AddExpenseService } from '../model/add-expense.service';

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
  providers: [
    {
      provide: ExpenseFormService,
      useClass: AddExpenseService,
    },
  ],
})
export class AddExpenseComponent {
  private readonly modalDialog = inject(ModalDialogService);
  private readonly expensesStorage = inject(ExpensesStorageService);
  private readonly expenseAlert = inject(ExpenseAlertService);

  openModalDialog(form: TemplateRef<unknown>): void {
    this.modalDialog.open('Add expense', form);
  }

  submit(expense: IExpense): void {
    this.expensesStorage.add(expense);
    this.expenseAlert.afterAdd(expense.amount, expense.currency);
    this.modalDialog.close();
  }
}
