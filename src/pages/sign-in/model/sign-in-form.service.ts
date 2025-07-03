import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BaseFormService,
  Form,
  lowercasePatternValidator,
  numericPatternValidator,
  uppercasePatternValidator,
} from '@shared/model';

interface ISignInFormValue {
  email: string;
  password: string;
}

@Injectable()
export class SignInFormService extends BaseFormService<ISignInFormValue> {
  protected override init(): FormGroup<Form<ISignInFormValue>> {
    return new FormGroup<Form<ISignInFormValue>>({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8),
          lowercasePatternValidator(/[a-z]+/g),
          uppercasePatternValidator(/[A-Z]+/g),
          numericPatternValidator(/[0-9]+/g),
        ],
      }),
    });
  }
}
