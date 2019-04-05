import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  loading = false;
  editBookForm: any;
  editBookId = this.route.snapshot.paramMap.get('id');
  constructor(
    private fb: FormBuilder,
    private _booksService: BooksService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  async initForm() {
    this.loading = true;
    const editBookData = await this._booksService.getBook(this.editBookId);
    this.loading = false;
    this.editBookForm = this.fb.group({
      bookName: [editBookData['bookName'], Validators.compose([
        Validators.required
      ])],
      authorName: [editBookData['authorName'], Validators.compose([
        Validators.required
      ])],
      ISBN: [editBookData['ISBN'], Validators.compose([
        Validators.required
      ])]
    });
  }

  async editBook() {
    this.loading = true;
    try {
      await this._booksService.editBook(this.editBookId, this.editBookForm.value);
      this.snackBar.open('Book updated successfully!!', '', {
        duration: 3000
      });
      this.location.back();
      this.loading = false;
    } catch (e) {
      this.snackBar.open(e.message, '', {
        duration: 3000
      });
      this.loading = false;
    }
  }

}
