import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { Observable, of } from 'rxjs';

type error = 'required' | 'email' | 'minlength' | 'pattern';

// todo rewrite without any
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type errorFn = (param: any) => Observable<string>;

const errorMessages: Record<error, string | errorFn> = {
  required: 'Required to fill',
  email: 'Incorrect email',
  minlength: ({ requiredLength }: { requiredLength: string }) =>
    of(`Minimum length — ${requiredLength}`),
  pattern: (pattern: string) => of(`Inconsistent with the ${pattern} pattern`),
};

export const provideValidationErrors = () => tuiValidationErrorsProvider(errorMessages);
