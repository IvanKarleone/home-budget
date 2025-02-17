import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputEmailComponent, InputPasswordComponent, InputTextComponent } from '@shared/ui';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';

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
