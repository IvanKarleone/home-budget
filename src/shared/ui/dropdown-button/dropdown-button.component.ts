import { ChangeDetectionStrategy, Component, input, TemplateRef } from '@angular/core';
import { TuiButton, TuiDataList, TuiDropdown } from '@taiga-ui/core';

type ButtonSize = 's' | 'm';

@Component({
  selector: 'hb-dropdown-button',
  imports: [TuiButton, TuiDataList, TuiDropdown],
  templateUrl: './dropdown-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class DropdownButtonComponent {
  menu = input.required<TemplateRef<unknown>>();

  size = input<ButtonSize>('m');
  icon = input('', {
    transform: icon => `@tui.${icon}`,
  });
  title = input('');

  protected isOpenedDropdown = false;
}
