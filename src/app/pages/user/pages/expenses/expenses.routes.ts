import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./pages/list/expenses-list.component').then(m => m.ExpensesListComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/expense/expense.component').then(m => m.ExpenseComponent),
  },
];
