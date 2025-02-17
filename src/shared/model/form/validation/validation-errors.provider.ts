import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { Observable, of } from 'rxjs';

// todo rewrite without any
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type errorFn = (param: any) => Observable<string>;

type error = 'required' | 'email' | 'minlength' | 'pattern';

type ErrorMessages = Record<error, string | errorFn>;

const defaultErrorMessages: ErrorMessages = {
  required: 'Required to fill',
  email: 'Incorrect email',
  minlength: ({ requiredLength }: { requiredLength: string }) =>
    of(`Minimum length — ${requiredLength}`),
  pattern: (pattern: string) => of(`Type ${pattern} symbols`),
};

export const provideValidationErrors = (errorMessages?: Partial<ErrorMessages>) =>
  tuiValidationErrorsProvider({
    ...defaultErrorMessages,
    ...(errorMessages ?? {}),
  });
