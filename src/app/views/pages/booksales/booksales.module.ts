import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksalesComponent } from './booksales.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksalesComponent
  }
]

@NgModule({
  declarations: [
    BooksalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BooksalesModule { }
