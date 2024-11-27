export const EXPENSE_CATEGORY = {
  PRODUCTS: 'products',
  HOME: 'home',
  TRAVEL: 'travel',
  OTHER: 'other',
} as const;

export const EXPENSE_CATEGORIES = Object.values(EXPENSE_CATEGORY);

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];
