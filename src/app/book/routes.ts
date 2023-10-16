import { Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookApiService } from "./book-api.service";

export const routes: Routes = [
    {
        path: '',
        component: BookComponent,
        providers: [ BookApiService ],
        children: [
            {
                path: '',
                component: BookListComponent
            },
            {
                path: 'new',
                loadComponent: () => import('./book-new/book-new.component').then(m => m.BookNewComponent)
            },
            {
                path: ':isbn',
                component: BookDetailComponent
            }
        ]
    }
];
