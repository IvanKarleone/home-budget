import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiBreakpointService, TuiButton, TuiDialog, TuiError } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiFieldErrorPipe } from '@taiga-ui/kit';
import {
  TuiInputDateModule,
  TuiInputNumberModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { map } from 'rxjs';

import { AddExpenseFormService } from '../../model/add-expense-form/add-expense-form.service';
import type { IExpense } from '../../model/expense/expense.interface';
import { EXPENSE_CATEGORIES } from '../../model/expense/expense-category.types';
import { EXPENSE_CURRENCIES } from '../../model/expense/expense-currency.types';

@Component({
  selector: 'hb-add-expense-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    TuiButton,
    TuiDialog,
    TuiInputNumberModule,
    TuiAutoFocus,
    TuiSelectModule,
    TuiDataListWrapper,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipe,
    TuiError,
  ],
  templateUrl: './add-expense-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AddExpenseFormService],
})
export class AddExpenseFormComponent {
  protected readonly addExpenseForm = inject(AddExpenseFormService);

  protected readonly isMobileBreakpoint$ = inject(TuiBreakpointService).pipe(
    map(breakpoint => breakpoint === 'mobile')
  );

  protected readonly currencies = EXPENSE_CURRENCIES;
  protected readonly categories = EXPENSE_CATEGORIES;

  protected isOpenedDialog = false;

  protected readonly addExpense = output<IExpense>();

  submit(): void {
    const expense = this.addExpenseForm.getValue();

    this.addExpense.emit(expense);
  }

  afterCloseDialog(): void {
    this.isOpenedDialog = false;

    this.addExpenseForm.form.reset();
  }
}
