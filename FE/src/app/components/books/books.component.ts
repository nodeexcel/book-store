import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BooksService } from '../../services/books.service';
import { Book } from '../../services/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['bookName', 'authorName', 'ISBN', 'action'];
  formatedColumns = {
    'bookName': 'Book Name',
    'authorName': 'Author Name',
    'ISBN': 'ISBN',
    'action': 'Action'
  };
  dataSource: MatTableDataSource<Array<Book>>;
  loading = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _booksService: BooksService,
    private snackBar: MatSnackBar
  ) {
    this.getBooks();
  }

  ngOnInit() {
  }

  async getBooks() {
    this.loading = true;
    const books = await this._booksService.getBooks();
    this.dataSource = new MatTableDataSource(books['data']);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loading = false;
  }

  async deleteBook(book) {
    this.loading = true;
    await this._booksService.deleteBook(book._id);
    this.snackBar.open('Book deleted successfully!!', '', {
      duration: 3000
    });
    this.loading = false;
    this.getBooks();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
