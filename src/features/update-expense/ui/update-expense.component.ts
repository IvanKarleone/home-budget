import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  TemplateRef,
} from '@angular/core';
import {
  ExpenseFormComponent,
  ExpenseFormValue,
  mapExpenseFormValueToUpdatedExpense,
  mapExpenseToExpenseFormValue,
} from '@entities/expense-form';
import { ExpensesStorageService } from '@shared/api';
import { ExpenseAlertService, IExpense, ModalDialogService } from '@shared/model';

@Component({
  selector: 'hb-update-expense',
  imports: [ExpenseFormComponent],
  templateUrl: './update-expense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class UpdateExpenseComponent {
  private readonly modalDialog = inject(ModalDialogService);
  private readonly expensesStorage = inject(ExpensesStorageService);
  private readonly expenseAlert = inject(ExpenseAlertService);

  expense = input.required<IExpense>();

  protected readonly expenseFormValue = computed(() =>
    mapExpenseToExpenseFormValue(this.expense())
  );

  openModalDialog(form: TemplateRef<unknown>): void {
    this.modalDialog.open('Edit expense', form);
  }

  update(expenseFormValue: ExpenseFormValue): void {
    const expense = mapExpenseFormValueToUpdatedExpense(expenseFormValue, this.expense());

    this.expensesStorage.update(expense);
    this.expenseAlert.afterUpdate();
    this.modalDialog.close();
  }
}
