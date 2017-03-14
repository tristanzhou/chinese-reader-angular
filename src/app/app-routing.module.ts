import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }       from './security/signin/signin.component';
import { SignUpComponent }       from './security/signup/signup.component';
import { ForgotPasswordComponent }       from './security/forgotpassword/forgotpassword.component';
import { BooksComponent }       from './books/books.component';
import { BookDetailComponent }  from './books/detail/book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'books',     component: BooksComponent },
  { path: 'books/:id',     component: BookDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
