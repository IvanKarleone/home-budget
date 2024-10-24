import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  templateUrl: './expenses-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesListComponent {}
