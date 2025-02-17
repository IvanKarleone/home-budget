import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InputBase, InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'hb-input-text',
  imports: [InputBaseComponent],
  template: `
    <hb-input-base
      type="text"
      [id]="id()"
      [label]="label()"
      [control]="control()"
      [autofocus]="autofocus()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class InputTextComponent extends InputBase {}
