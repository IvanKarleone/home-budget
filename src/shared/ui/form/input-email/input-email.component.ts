import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InputBase, InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'hb-input-email',
  imports: [InputBaseComponent],
  template: `
    <hb-input-base
      type="email"
      [id]="id()"
      [label]="label()"
      [control]="control()"
      [autofocus]="autofocus()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class InputEmailComponent extends InputBase {}
