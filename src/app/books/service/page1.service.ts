import { Page } from '../entities/page';
import { PAGES } from './mock/mock-pages';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {
  
  result: Object;
  page: Page;

  constructor(private http: Http){
  }

  getPages(): Promise<Page[]> {
    return Promise.resolve(PAGES);
  }

  getPagesSlowly(): Promise<Page[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getPages()), 2000);
    });
  }

  getPage(id: number): Promise<Page> {
    return this.getPages().then(pages => pages.find(page => page.id === id));
  }

  getJsonPage(id: number): Observable<Object> {
    return this.http.get('app/test.json').map((res: Response) => res.json());
    //this.page = {id: 1, name: 'test', description: 'desc', backgroundColor: 'red', data:this.result};
    //console.log(this.result);
    //console.log(this.page);
    //return Promise.resolve(this.page);
  }

}
