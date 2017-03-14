import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadingComponent }     from './reading.component';
import { PageComponent }        from './page/page.component';

const readingRoutes: Routes = [
  {
    path: 'reading/:id',
    component: ReadingComponent,
    children: [
      { path: 'page/:pid', component: PageComponent }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(readingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReadingRoutingModule { }