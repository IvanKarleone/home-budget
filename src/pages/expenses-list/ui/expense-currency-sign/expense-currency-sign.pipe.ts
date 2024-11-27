import { Pipe, PipeTransform } from '@angular/core';
import { ExpenseCurrency } from '@pages/expenses-list/model/expense/expense-currency.types';

@Pipe({
  name: 'expenseCurrencySign',
  standalone: true,
})
export class ExpenseCurrencySignPipe implements PipeTransform {
  transform(expenseCurrency: ExpenseCurrency): string {
    const expenseCurrencySign: Record<ExpenseCurrency, string> = {
      EUR: '€',
      RUB: '₽',
      USD: '$',
    };

    return expenseCurrencySign[expenseCurrency];
  }
}
