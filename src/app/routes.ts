import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
    },
    {
        path: 'books',
        loadChildren: () => import('./book/routes').then(m => m.routes)
    }
];
