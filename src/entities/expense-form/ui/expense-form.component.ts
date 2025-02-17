import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EXPENSE_CATEGORIES, EXPENSE_CURRENCIES } from '@shared/model';
import { InputDateComponent, InputNumberComponent, SelectComponent } from '@shared/ui';
import { TuiButton } from '@taiga-ui/core';
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
    TuiButton,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    InputNumberComponent,
    InputDateComponent,
    SelectComponent,
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
