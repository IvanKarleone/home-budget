import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwitchThemeComponent } from '@features/switch-theme';
import { BreakpointService } from '@shared/model';
import { DropdownButtonComponent } from '@shared/ui';
import { TuiDataList } from '@taiga-ui/core';

@Component({
  selector: 'hb-user-avatar',
  imports: [RouterLink, TuiDataList, SwitchThemeComponent, DropdownButtonComponent],
  templateUrl: './user-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class UserAvatarComponent {
  protected readonly isMobileBreakpoint = inject(BreakpointService).isMobile;
}
