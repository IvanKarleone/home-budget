import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormService, Form } from '@shared/model';

interface ISignUpFormValue {
  fullName: string;
  email: string;
  password: string;
}

@Injectable()
export class SignUpFormService extends BaseFormService<ISignUpFormValue> {
  protected override init(): FormGroup<Form<ISignUpFormValue>> {
    return new FormGroup<Form<ISignUpFormValue>>({
      fullName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
  }
}
