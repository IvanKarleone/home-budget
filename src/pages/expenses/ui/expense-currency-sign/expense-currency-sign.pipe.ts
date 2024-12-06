import { Pipe, PipeTransform } from '@angular/core';
import type { ExpenseCurrency } from '@shared/model';

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
