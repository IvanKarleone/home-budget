import { inject, Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TUI_CONFIRM } from '@taiga-ui/kit';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  private readonly dialog = inject(TuiDialogService);

  openForDelete(): Observable<boolean> {
    return this.dialog
      .open<boolean>(TUI_CONFIRM, {
        label: 'Are you sure?',
        size: 's',
        data: {
          content: 'You will delete this item permanently',
        },
      })
      .pipe(take(1));
  }
}
