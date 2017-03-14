import { Component }      from '@angular/core';
import { NgForm }         from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book }           from './books/entities/book';

@Component({
    selector: 'my-app',
    // templateUrl: `<h1>Hello {{name}}</h1>`,
    templateUrl: 'app/app.component.html',
})

export class AppComponent { 
    name = 'Angular a';
    book: Book;

    constructor(private router: Router, private route: ActivatedRoute) {
      this.book = new Book();
    }

    search(searchForm: NgForm): void {
      console.log(searchForm.value);
      this.router.navigate(
        ['books'], 
        { 
          relativeTo: this.route, 
          queryParams: { searchText: searchForm.value.searchText } 
        }
      ); 
    }
}