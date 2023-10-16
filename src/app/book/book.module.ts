import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookNewComponent } from "./book-new/book-new.component";

@NgModule({
    imports: [
        BookRoutingModule,
        // standalone components needs to be imported
        BookDetailComponent,
        BookListComponent,
        BookNewComponent
    ],
    declarations: [
        BookComponent
    ]
})
export class BookModule {
}
