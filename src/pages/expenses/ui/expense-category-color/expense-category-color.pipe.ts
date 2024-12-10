import { Pipe, PipeTransform } from '@angular/core';
import type { ExpenseCategory } from '@shared/model';

@Pipe({
  name: 'expenseCategoryColor',
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
