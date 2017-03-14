import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { ReadingComponent }    from './reading.component';
import { PageComponent }  from './page/page.component';

import { BookService } from '../service/book.service';
import { PageService } from '../service/page.service';

import { ReadingRoutingModule } from './reading-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReadingRoutingModule,
  ],
  declarations: [
    ReadingComponent,
    PageComponent
  ],
  providers: [ BookService, PageService ]
})
export class ReadingModule {}