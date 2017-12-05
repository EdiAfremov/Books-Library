import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { book } from "../book.model";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent {
  @Input() books;
  editedBook;

  onEdit(data) {
    this.editedBook = [];
    this.editedBook.push(data);
  }
}
