import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { VoteBookComponent } from './components/vote-book/vote-book.component';
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    pathMatch: 'full'
  }, {
    path: 'add-book',
    component: AddBookComponent
  }, {
    path: 'edit-book/:id',
    component: EditBookComponent
  }, {
    path: 'vote-book',
    component: VoteBookComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
