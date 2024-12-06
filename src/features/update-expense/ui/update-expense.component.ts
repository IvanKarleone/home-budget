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
  standalone: true,
  imports: [ExpenseFormComponent],
  templateUrl: './update-expense.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
