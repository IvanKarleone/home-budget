import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'expenses',
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses.routes').then(m => m.routes),
  },
];
