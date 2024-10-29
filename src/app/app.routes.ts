import { Routes } from '@angular/router';
import { EXPENSES_LIST_ROUTES } from './consts/expenses-list-routes.const';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: EXPENSES_LIST_ROUTES.root,
  },
  {
    path: EXPENSES_LIST_ROUTES.root,
    loadComponent: () =>
      import('./components/expenses-list/expenses-list.component').then(
        m => m.ExpensesListComponent
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
