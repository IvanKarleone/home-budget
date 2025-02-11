import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiError, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiPassword } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';

import { SignUpFormService } from '../model/sign-up-form.service';

@Component({
  selector: 'hb-sign-up',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    AsyncPipe,
    TuiError,
    TuiFieldErrorPipe,
    TuiPassword,
    TuiIcon,
    TuiTextfield,
  ],
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full flex-col items-center',
  },
  providers: [SignUpFormService],
})
export class SignUpComponent {
  protected readonly signUpFormService = inject(SignUpFormService);

  signUp(): void {
    const { name, email, password } = this.signUpFormService.getValue();

    console.log(name);
    console.log(email);
    console.log(password);
  }
}
