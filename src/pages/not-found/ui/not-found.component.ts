import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'hb-not-found',
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
  imports: [TuiButton, RouterLink],
})
export class NotFoundComponent {}
