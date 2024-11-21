import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: 'user',
    loadChildren: () => import('./user.routes').then(m => m.routes),
  },
  {
    path: '**',
    loadComponent: () => import('@pages/not-found').then(m => m.NotFoundComponent),
  },
];
