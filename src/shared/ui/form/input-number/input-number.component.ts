import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InputBase, InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'hb-input-number',
  imports: [InputBaseComponent],
  template: `
    <hb-input-base
      type="number"
      [id]="id()"
      [label]="label()"
      [control]="control()"
      [autofocus]="autofocus()" />
  `,
  styles: [
    `
      :host ::ng-deep {
        input::-webkit-outer-spin-button,
        ::ng-deep input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type='number'] {
          -moz-appearance: textfield;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class InputNumberComponent extends InputBase {}
