import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hb-incomes',
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
