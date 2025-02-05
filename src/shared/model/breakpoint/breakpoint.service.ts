import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiBreakpointService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  readonly #breakpoint = toSignal(inject(TuiBreakpointService));

  readonly isMobile = computed(() => this.#breakpoint() === 'mobile');
  readonly isTablet = computed(() => this.#breakpoint() === 'desktopSmall');
  readonly isDesktop = computed(() => this.#breakpoint() == 'desktopLarge');

  readonly isAboveMobile = computed(() => !this.isMobile());
}
