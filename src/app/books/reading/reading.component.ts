import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Book } from '../entities/book';
import { BookService }  from '../service/book.service';

@Component({
  moduleId: module.id,
  selector: 'my-reading',
  templateUrl: './reading.component.html',
  styleUrls: [ './reading.component.css' ]
})
export class ReadingComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

}
