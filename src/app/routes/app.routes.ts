import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: 'sign-up',
    loadComponent: () => import('@pages/sign-up').then(m => m.SignUpComponent),
  },
  {
    path: 'sign-in',
    loadComponent: () => import('@pages/sign-in').then(m => m.SignInComponent),
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
