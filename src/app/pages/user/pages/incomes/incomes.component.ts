import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-incomes',
  standalone: true,
  templateUrl: './incomes.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomesComponent {}
