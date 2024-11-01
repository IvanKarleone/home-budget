import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'expenses',
  },
  {
    path: 'expenses',
    loadChildren: () => import('./pages/expenses/expenses.routes').then(m => m.routes),
  },
  {
    path: 'incomes',
    loadComponent: () => import('./pages/incomes/incomes.component').then(m => m.IncomesComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
  },
];
