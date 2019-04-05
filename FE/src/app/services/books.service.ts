import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Book } from './book.interface';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  async getBooks() {
    try {
      return this.http.get(`${environment.baseApi}/books`).toPromise();
    } catch (e) {
      throw (e);
    }
  }

  async getBook(bookId: string) {
    try {
      return this.http.get(`${environment.baseApi}/books/getBookById/${bookId}`).toPromise();
    } catch (e) {
      throw (e);
    }
  }

  async addBook(book: Book) {
    try {
      return this.http.post(`${environment.baseApi}/books/addBook`, book).toPromise();
    } catch (e) {
      throw (e);
    }
  }

  async editBook(bookId: string, book: Book) {
    try {
      return this.http.put(`${environment.baseApi}/books/updateBook/${bookId}`, book).toPromise();
    } catch (e) {
      throw (e);
    }
  }

  async deleteBook(bookId: string) {
    try {
      return this.http.delete(`${environment.baseApi}/books/deleteBook/${bookId}`).toPromise();
    } catch (e) {
      throw (e);
    }
  }
}
