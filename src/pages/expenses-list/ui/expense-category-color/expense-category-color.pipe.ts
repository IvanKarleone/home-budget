import { Pipe, PipeTransform } from '@angular/core';
import { ExpenseCategory } from '@pages/expenses-list/model/expense/expense-category.types';

@Pipe({
  name: 'expenseCategoryColor',
  standalone: true,
})
export class ExpenseCategoryColorPipe implements PipeTransform {
  transform(expenseCategory: ExpenseCategory): string {
    const expenseCategoryColor: Record<ExpenseCategory, string> = {
      products: 'text-orange-600',
      home: 'text-green-600',
      travel: 'text-blue-500',
      other: 'text-gray-500',
    };

    return expenseCategoryColor[expenseCategory];
  }
}
