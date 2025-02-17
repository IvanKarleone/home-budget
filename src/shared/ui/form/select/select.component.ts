import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperComponent } from '@taiga-ui/kit';
import { TuiSelectModule } from '@taiga-ui/legacy';

@Component({
  selector: 'hb-select',
  imports: [ReactiveFormsModule, TuiDataListWrapperComponent, TuiSelectModule],
  template: `
    <tui-select [formControl]="control()">
      {{ label() }}
      <tui-data-list-wrapper *tuiDataList [items]="items()" />
    </tui-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class SelectComponent {
  label = input.required<string>();
  control = input.required<FormControl>();
  items = input.required<unknown[]>();
}
