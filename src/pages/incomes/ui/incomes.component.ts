import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hb-incomes',
  standalone: true,
  imports: [],
  templateUrl: './incomes.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomesComponent {}
