import { Pipe, PipeTransform } from '@angular/core';
import type { ExpenseCategory } from '@shared/model';

@Pipe({
  name: 'expenseCategoryIcon',
})
export class ExpenseCategoryIconPipe implements PipeTransform {
  transform(expenseCategory: ExpenseCategory): string {
    const expenseCategoryIcon: Record<ExpenseCategory, string> = {
      products: '@tui.shopping-basket',
      home: '@tui.house',
      travel: '@tui.plane',
      other: '@tui.wrench',
    };

    return expenseCategoryIcon[expenseCategory];
  }
}
