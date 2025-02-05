import { FormGroup } from '@angular/forms';

import type { Form } from './form.type';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export abstract class BaseFormService<TFormValue extends Record<string, any>> {
  readonly form = this.init();

  getValue() {
    return this.form.getRawValue();
  }

  setValue(formValue: TFormValue): void {
    this.form.setValue(formValue);
  }

  protected abstract init(): FormGroup<Form<TFormValue>>;
}
