import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { book } from "../book.model";
@Component({
  selector: "app-books-manage",
  templateUrl: "./books-manage.component.html",
  styleUrls: ["./books-manage.component.scss"]
})
export class BooksManageComponent {
  @Output() addNewBookTolist = new EventEmitter<{ book }>();
  newBook;
  constructor() {}

  addNewBook(data) {
    this.newBook = data;
    this.addNewBookTolist.emit(this.newBook);
  }
}
