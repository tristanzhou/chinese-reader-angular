import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './entities/book';
import { BookService } from './service/book.service';

@Component({
  moduleId: module.id,
  selector: 'my-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.css' ]
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.route.queryParams
              .subscribe(params => {
                this.bookService
                    .getSearchBooks(params['searchText'])
                    .then(books => this.books = books)
              });
  }

  search(searchText: string): void {
    // todo search books which match the search text.
  }

}
