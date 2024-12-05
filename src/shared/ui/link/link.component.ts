import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'hb-link',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TuiButton],
  templateUrl: './link.component.html',
  styles: `
    :host {
      display: block;
    }

    a.active {
      border-bottom: 2px solid;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  title = input.required<string>();
  route = input.required<string | string[]>();
  activeClass = input<string>('active');
}
