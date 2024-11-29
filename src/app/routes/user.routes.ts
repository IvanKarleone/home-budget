import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'expenses',
  },
  {
    path: 'expenses',
    loadComponent: () => import('@pages/expenses').then(m => m.ExpensesComponent),
  },
  {
    path: 'incomes',
    loadComponent: () => import('@pages/incomes').then(m => m.IncomesComponent),
  },
];
