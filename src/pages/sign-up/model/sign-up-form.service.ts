import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BaseFormService,
  Form,
  lowercasePatternValidator,
  numericPatternValidator,
  uppercasePatternValidator,
} from '@shared/model';

interface ISignUpFormValue {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class SignUpFormService extends BaseFormService<ISignUpFormValue> {
  protected override init(): FormGroup<Form<ISignUpFormValue>> {
    return new FormGroup<Form<ISignUpFormValue>>({
      name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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
