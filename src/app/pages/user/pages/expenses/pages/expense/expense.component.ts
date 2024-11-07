import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-expense',
  standalone: true,
  templateUrl: './expense.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseComponent {}
