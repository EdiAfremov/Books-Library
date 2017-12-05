import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { BooksManageComponent } from "./books-manage/books-manage.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { NewBookModalComponent } from "./books-manage/new-book-modal/new-book-modal.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EditModalComponent } from "./books-list/edit-modal/edit-modal.component";

import { TitlePipePipe } from "./title-pipe.pipe";
import { OnlyEnglishLettersPipePipe } from './only-english-letters-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksManageComponent,
    BooksListComponent,
    NewBookModalComponent,
    EditModalComponent,

    TitlePipePipe,

    OnlyEnglishLettersPipePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
