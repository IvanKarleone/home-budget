import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiDataList, TuiDialog } from '@taiga-ui/core';
import { TuiInputNumberModule, TuiSelectModule } from '@taiga-ui/legacy';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiDataListWrapper } from '@taiga-ui/kit';

export interface IExpense {
  amount: number;
  currency: 'RUB' | 'USD' | 'EUR';
  date: Date;
  category: 'products' | 'home' | 'travel' | 'other';
}

const currencies = ['RUB', 'USD', 'EUR'];

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiDialog,
    TuiInputNumberModule,
    TuiAutoFocus,
    TuiSelectModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  templateUrl: './expenses-list.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesListComponent {
  readonly expenseForm = new FormGroup({
    amount: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    currency: new FormControl('RUB', { nonNullable: true, validators: [Validators.required] }),
  });

  currencies = currencies;

  isOpenedDialog = false;
}
