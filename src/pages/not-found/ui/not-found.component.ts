import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hb-not-found',
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class NotFoundComponent {}
