import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InputBase, InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'hb-input-password',
  imports: [InputBaseComponent],
  template: `
    <hb-input-base
      type="password"
      [id]="id()"
      [label]="label()"
      [control]="control()"
      [autofocus]="autofocus()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class InputPasswordComponent extends InputBase {}
