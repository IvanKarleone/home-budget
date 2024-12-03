import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitchComponent } from '@features/theme-switch';
import { TuiButton, TuiDataList, TuiDropdown } from '@taiga-ui/core';

@Component({
  selector: 'hb-user-avatar',
  standalone: true,
  imports: [TuiButton, TuiDataList, TuiDropdown, ThemeSwitchComponent],
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
