import { Book } from '../entities/book';
import { BOOKS } from './mock/mock-books';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  getSearchBooks(id: number): Promise<Book[]> {
    if (isNaN(id) || id == "") {
      return this.getBooks();
    }
    return this.getBooks().then(books => books.filter(book => book.id === id));
  }

  getBooksSlowly(): Promise<Book[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getBooks()), 2000);
    });
  }

  getBook(id: number): Promise<Book> {
    return this.getBooks().then(books => books.find(book => book.id === id));
  }
}
