import { AbstractControl } from '@angular/forms';

import { PATTERN_VALIDATOR, type PatternValidatorValue } from './pattern-validators.types';

function patternValidatorFactory(regExp: RegExp, pattern: PatternValidatorValue) {
  return (control: AbstractControl) => {
    const isExistPattern = new RegExp(regExp).test(control.value);

    return isExistPattern ? null : { pattern };
  };
}

export function numericPatternValidator(regExp: RegExp) {
  return patternValidatorFactory(regExp, PATTERN_VALIDATOR.NUMERIC);
}

export function uppercasePatternValidator(regExp: RegExp) {
  return patternValidatorFactory(regExp, PATTERN_VALIDATOR.UPPERCASE);
}

export function lowercasePatternValidator(regExp: RegExp) {
  return patternValidatorFactory(regExp, PATTERN_VALIDATOR.LOWERCASE);
}
