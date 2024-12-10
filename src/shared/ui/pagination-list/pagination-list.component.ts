import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
  TemplateRef,
} from '@angular/core';
import { TuiPagination } from '@taiga-ui/kit';

export const ITEMS_COUNT_PER_PAGE = 10;

@Component({
  selector: 'hb-pagination-list',
  imports: [NgTemplateOutlet, TuiPagination],
  templateUrl: './pagination-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class PaginationListComponent {
  listTemplate = input.required<TemplateRef<unknown>>();

  items = input.required<unknown[]>();

  protected currentPageIndex = signal<number>(0);

  protected displayedItems = computed(() => {
    const starItemtIndex = this.currentPageIndex() * ITEMS_COUNT_PER_PAGE;
    const endItemIndex = starItemtIndex + ITEMS_COUNT_PER_PAGE;

    return this.items().slice(starItemtIndex, endItemIndex);
  });

  protected pagesCount = computed(() => Math.ceil(this.items().length / ITEMS_COUNT_PER_PAGE));

  protected isVisiblePages = computed(() => this.pagesCount() > 1);

  goToPage(newPage: number): void {
    this.currentPageIndex.set(newPage);
  }
}
