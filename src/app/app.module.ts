import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import { Safe }                       from './app.safe';

import { AppComponent }               from './app.component';
import { SignInComponent }            from './security/signin/signin.component';
import { SignUpComponent }            from './security/signup/signup.component';
import { ForgotPasswordComponent }    from './security/forgotpassword/forgotpassword.component';
import { BooksComponent }             from './books/books.component';
import { BookDetailComponent }        from './books/detail/book-detail.component';

import { SignInService }              from './security/service/signin.service';
import { BookService }                from './books/service/book.service';
import { PageService }                from './books/service/page.service';


import { AppRoutingModule }           from './app-routing.module';
import { ReadingModule }              from './books/reading/reading.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReadingModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    BooksComponent,
    BookDetailComponent,
    Safe
  ],
  providers: [ SignInService, BookService, PageService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
