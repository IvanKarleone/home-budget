import { inject, Injectable, TemplateRef } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  private readonly dialog = inject(TuiDialogService);

  private readonly subscriptions: Subscription[] = [];

  open(label: string, content: string | TemplateRef<unknown>): void {
    const subscription = this.dialog
      .open(content, {
        label,
        size: 'm',
      })
      .subscribe();

    this.subscriptions.push(subscription);
  }

  close(): void {
    const lastSubscription = this.subscriptions.pop();

    lastSubscription?.unsubscribe();
  }
}
