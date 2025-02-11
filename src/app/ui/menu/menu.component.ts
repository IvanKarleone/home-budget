import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointService } from '@shared/model';
import { LinkComponent } from '@shared/ui';

import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component({
  selector: 'hb-menu',
  imports: [LinkComponent, UserAvatarComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sticky top-0 z-10 mb-7 block bg-[--tui-background-base] px-4 pt-2',
  },
})
export class MenuComponent {
  protected readonly isAboveMobileBreakpoint = inject(BreakpointService).isAboveMobile;
}
