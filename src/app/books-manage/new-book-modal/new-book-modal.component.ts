import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { book } from "../../book.model";

@Component({
  selector: "app-new-book-modal",
  templateUrl: "./new-book-modal.component.html",
  styleUrls: ["../books-manage.component.scss"]
})
export class NewBookModalComponent {
  newBookForm: FormGroup;
  modalRef: NgbModalRef;
  @Output() newBook = new EventEmitter<book>();
  newBookToAdd: book = {
    author: "",
    title: "",
    date: {},
    image: ""
  };
  constructor(private newBookModal: NgbModal, private fb: FormBuilder) {
    this.createBookValidation();
  }

  open(content) {
    this.modalRef = this.newBookModal.open(content);
  }

  createBookValidation() {
    this.newBookForm = this.fb.group({
      author: ["", Validators.required],
      title: ["", Validators.required],
      date: ["", Validators.required],
      image: ["", Validators.required]
    });
  }
  onSubmit() {
    this.newBookToAdd.author = this.newBookForm.value.author;
    this.newBookToAdd.title = this.newBookForm.value.title;
    this.newBookToAdd.date = this.newBookForm.value.date;
    this.newBookToAdd.image = this.newBookForm.value.image;
    this.newBook.emit(this.newBookToAdd);
    this.newBookForm.reset();
    this.modalRef.close();
  }
}
