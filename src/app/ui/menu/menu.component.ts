import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkComponent } from '@shared/ui';

import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component({
  selector: 'hb-menu',
  standalone: true,
  imports: [LinkComponent, UserAvatarComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sticky top-0 z-10 mb-5 block bg-[--tui-background-base] px-4 pt-2',
  },
})
export class MenuComponent {}
