import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwitchThemeComponent } from '@features/switch-theme';
import { DropdownButtonComponent } from '@shared/ui';
import { TuiDataList } from '@taiga-ui/core';

@Component({
  selector: 'hb-user-avatar',
  imports: [TuiDataList, SwitchThemeComponent, DropdownButtonComponent],
  templateUrl: './user-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class UserAvatarComponent {}
