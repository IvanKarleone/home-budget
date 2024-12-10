import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitchComponent } from '@features/theme-switch';
import { DropdownButtonComponent } from '@shared/ui';
import { TuiDataList } from '@taiga-ui/core';

@Component({
  selector: 'hb-user-avatar',
  imports: [TuiDataList, ThemeSwitchComponent, DropdownButtonComponent],
  templateUrl: './user-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class UserAvatarComponent {
  protected isOpenedUserMenu = false;
}
