import { FormControl } from '@angular/forms';

export type Form<T extends object> = {
  [P in keyof T]: FormControl<T[P]>;
};
