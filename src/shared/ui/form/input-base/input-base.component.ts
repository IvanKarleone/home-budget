import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import {
  TuiError,
  TuiIcon,
  TuiLabel,
  TuiTextfieldComponent,
  TuiTextfieldDirective,
} from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiPassword } from '@taiga-ui/kit';

// ts cannot see input and output unless class have @Directive or @Component decorator
@Directive({})
export class InputBase {
  id = input.required<string>();
  label = input.required<string>();
  control = input.required<FormControl>();
  autofocus = input(false);
}

type InputType = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'hb-input-base',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiError,
    TuiFieldErrorPipe,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiAutoFocus,
    TuiPassword,
    TuiIcon,
  ],
  templateUrl: './input-base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col',
  },
})
export class InputBaseComponent extends InputBase {
  type = input.required<InputType>();
}
