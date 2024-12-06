import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import type { IExpense } from '@shared/model';
import { EXPENSE_CATEGORIES, EXPENSE_CURRENCIES } from '@shared/model';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiBreakpointService, TuiButton, TuiError } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiFieldErrorPipe } from '@taiga-ui/kit';
import {
  TuiInputDateModule,
  TuiInputNumberModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { map } from 'rxjs';

import { ExpenseFormService } from '../model/expense-form.service';

@Component({
  selector: 'hb-expense-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    TuiButton,
    TuiInputNumberModule,
    TuiAutoFocus,
    TuiSelectModule,
    TuiDataListWrapper,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipe,
    TuiError,
  ],
  templateUrl: './expense-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseFormComponent {
  protected readonly formService = inject(ExpenseFormService);

  protected readonly isMobileBreakpoint$ = inject(TuiBreakpointService).pipe(
    map(breakpoint => breakpoint === 'mobile')
  );

  readonly submitForm = output<IExpense>();

  protected readonly currencies = EXPENSE_CURRENCIES;
  protected readonly categories = EXPENSE_CATEGORIES;

  submit(): void {
    const expense = this.formService.getValue();
    this.submitForm.emit(expense);

    this.formService.form.reset();
  }
}