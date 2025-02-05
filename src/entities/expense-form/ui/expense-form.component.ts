import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreakpointService, EXPENSE_CATEGORIES, EXPENSE_CURRENCIES } from '@shared/model';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiButton, TuiError } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiFieldErrorPipe } from '@taiga-ui/kit';
import {
  TuiInputDateModule,
  TuiInputNumberModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import { ExpenseFormService } from '../model/expense-form.service';
import type { ExpenseFormValue } from '../model/expense-form.type';

@Component({
  selector: 'hb-expense-form',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExpenseFormService],
  host: {
    class: 'block',
  },
})
export class ExpenseFormComponent {
  protected readonly formService = inject(ExpenseFormService);
  protected readonly isMobileBreakpoint = inject(BreakpointService).isMobile;

  formValue = input<ExpenseFormValue>();

  readonly submitForm = output<ExpenseFormValue>();

  protected readonly currencies = EXPENSE_CURRENCIES;
  protected readonly categories = EXPENSE_CATEGORIES;

  constructor() {
    this.setFormValue();
  }

  submit(): void {
    this.submitForm.emit(this.formService.getValue());
  }

  setFormValue(): void {
    effect(() => {
      const formValue = this.formValue();

      if (formValue) {
        this.formService.setValue(formValue);
      }
    });
  }
}
