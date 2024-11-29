import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSwitchComponent } from '@features/theme-switch';
import { TuiButton, TuiDataList, TuiDropdown } from '@taiga-ui/core';

@Component({
  selector: 'hb-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    ThemeSwitchComponent,
  ],
  templateUrl: './menu.component.html',
  styles: `
    a.active {
      border-bottom: 1px solid;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sticky top-0 z-10 mb-5 block bg-[--tui-background-base] px-4 pt-2',
  },
})
export class MenuComponent {
  protected isOpenedUserMenu = false;
}
