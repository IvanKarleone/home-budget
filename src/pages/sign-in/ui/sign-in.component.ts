import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideValidationErrors } from '@shared/model';
import { InputEmailComponent, InputPasswordComponent } from '@shared/ui';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { of } from 'rxjs';

import { SignInFormService } from '../model/sign-in-form.service';

@Component({
  selector: 'hb-sign-in',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    InputEmailComponent,
    InputPasswordComponent,
  ],
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full flex-col items-center',
  },
  providers: [
    SignInFormService,
    provideValidationErrors({
      pattern: () => of(`Type a mix of numbers, lower and upper letters`),
    }),
  ],
})
export class SignInComponent {
  protected readonly formService = inject(SignInFormService);
}
