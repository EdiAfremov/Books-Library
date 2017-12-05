import { Component } from "@angular/core";
import { book } from "./book.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  booksArray: string[];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get("/assets/api.json").subscribe(data => {
      this.booksArray = data["books"];
    });
  }
  addNewBookToArr(newBook) {
    this.booksArray.push(newBook);
  }
}
