import { Pipe, PipeTransform } from '@angular/core';
import { ExpenseCategory } from '@pages/expenses-list/model/expense/expense-category.types';

@Pipe({
  name: 'expenseCategoryIcon',
  standalone: true,
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
