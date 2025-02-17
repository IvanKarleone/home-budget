export const PATTERN_VALIDATOR = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  NUMERIC: 'numeric',
} as const;

export type PatternValidatorKey = keyof typeof PATTERN_VALIDATOR;

export type PatternValidatorValue = (typeof PATTERN_VALIDATOR)[PatternValidatorKey];
