import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitchComponent } from '@features/theme-switch';
import { DropdownButtonComponent } from '@shared/ui';
import { TuiDataList } from '@taiga-ui/core';

@Component({
  selector: 'hb-user-avatar',
  standalone: true,
  imports: [TuiDataList, ThemeSwitchComponent, DropdownButtonComponent],
  templateUrl: './user-avatar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatarComponent {
  protected isOpenedUserMenu = false;
}
