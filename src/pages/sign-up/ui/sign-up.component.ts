import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideValidationErrors } from '@shared/model';
import { InputEmailComponent, InputPasswordComponent, InputTextComponent } from '@shared/ui';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { of } from 'rxjs';

import { SignUpFormService } from '../model/sign-up-form.service';

@Component({
  selector: 'hb-sign-up',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent,
  ],
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full flex-col items-center',
  },
  providers: [
    SignUpFormService,
    provideValidationErrors({
      pattern: () => of(`Type a mix of numbers, lower and upper letters`),
    }),
  ],
})
export class SignUpComponent {
  protected readonly formService = inject(SignUpFormService);

  constructor() {
    setInterval(() => {
      console.log(this.formService.form.controls.password.errors);
    }, 2000);
  }

  signUp(): void {
    const { name, email, password } = this.formService.getValue();

    console.log(name);
    console.log(email);
    console.log(password);
  }
}
