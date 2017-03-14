import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Book } from '../../entities/book';
import { BookService }  from '../../service/book.service';
import { Page } from '../../entities/Page';
import { PageService } from '../../service/page.service';

@Component({
  moduleId: module.id,
  selector: 'my-page',
  templateUrl: './page.component.html',
  styleUrls: [ './page.component.css' ]
})
export class PageComponent implements OnInit {
  
  book: Book;
  page: Page;
  private bookId: number;
  errorMessage: string;

  constructor(
    private bookService: BookService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.pageService.getPage(+params['pid']))
        .subscribe(page => this.page = page, error =>  this.errorMessage = <any>error);
  }

  ngOnDestroy() {
  }

}
