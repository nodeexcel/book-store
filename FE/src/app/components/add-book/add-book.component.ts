import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  loading = false;
  addBookForm = this.fb.group({
    bookName: ['', Validators.compose([
      Validators.required
    ])],
    authorName: ['', Validators.compose([
      Validators.required
    ])],
    ISBN: ['', Validators.compose([
      Validators.required
    ])]
  });

  constructor(
    private fb: FormBuilder,
    private _booksService: BooksService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  async addBook() {
    this.loading = true;
    console.log(this.addBookForm.value);
    try {
      await this._booksService.addBook(this.addBookForm.value);
      this.snackBar.open('Book added successfully!!', '', {
        duration: 3000
      });
      this.addBookForm.reset();
      this.loading = false;
    } catch (e) {
      this.snackBar.open(e.message, '', {
        duration: 3000
      });
      this.loading = false;
    }
  }

}
