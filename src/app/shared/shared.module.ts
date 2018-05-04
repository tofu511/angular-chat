import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentDatePipe } from '../pipe/comment-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    CommentDatePipe,
    FormsModule
  ],
  declarations: [
    CommentDatePipe
  ]
})
export class SharedModule { }
