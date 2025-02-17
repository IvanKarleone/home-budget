import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiError } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/legacy';

@Component({
  selector: 'hb-input-date',
  imports: [AsyncPipe, ReactiveFormsModule, TuiError, TuiFieldErrorPipe, TuiInputDateModule],
  template: `
    <tui-input-date [formControl]="control()"> {{ label() }}</tui-input-date>

    <tui-error [formControl]="control()" [error]="[] | tuiFieldError | async" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class InputDateComponent {
  label = input.required<string>();
  control = input.required<FormControl>();
}
