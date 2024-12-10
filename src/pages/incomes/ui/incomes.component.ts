import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hb-incomes',
  imports: [],
  templateUrl: './incomes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class IncomesComponent {}
