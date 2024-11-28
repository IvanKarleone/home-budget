export const EXPENSE_CURRENCY = {
  EUR: 'EUR',
  USD: 'USD',
  RUB: 'RUB',
} as const;

export const EXPENSE_CURRENCIES = Object.values(EXPENSE_CURRENCY);

export type ExpenseCurrency = (typeof EXPENSE_CURRENCIES)[number];
