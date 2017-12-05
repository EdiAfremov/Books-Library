import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter
} from "@angular/core";
import {
  NgbModal,
  NgbModalRef,
  ModalDismissReasons,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
import {
  NgForm,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { book } from "../../book.model";

@Component({
  selector: "app-edit-modal",
  templateUrl: "./edit-modal.component.html",
  styleUrls: ["./edit-modal.component.scss"]
})
export class EditModalComponent {
  @Input() booksEdit;
  @Input() bookId;
  @Output() editBook = new EventEmitter<{ book }>();
  booksArr;
  modalRef: NgbModalRef;
  EditBookForm: FormGroup;

  constructor(public modal: NgbModal, private fb: FormBuilder) {
    this.editBookValidation();
  }
  editBookValidation() {
    this.EditBookForm = this.fb.group({
      author: ["", Validators.required],
      title: ["", Validators.required],
      date: ["", Validators.required],
      image: ["", Validators.required]
    });
  }
  open(content) {
    this.booksArr = [];
    this.booksArr.push(this.bookId);
    this.modalRef = this.modal.open(content);
  }
  closeModal() {
    this.EditBookForm.reset();
    this.modalRef.close();
  }

  onSubmit() {
    this.bookId.author = this.EditBookForm.value.author;
    this.bookId.title = this.EditBookForm.value.title;
    this.bookId.date = this.EditBookForm.value.date;
    this.bookId.image = this.EditBookForm.value.image;
    this.editBook.emit(this.bookId);
    this.EditBookForm.reset();
    this.modalRef.close();
  }
  deleteBook() {
    let deletedBook = this.bookId.title;
    alert("This book has been successfully deleted: " + deletedBook);
    this.modalRef.close();
  }
}
