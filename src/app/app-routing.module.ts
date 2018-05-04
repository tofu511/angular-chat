import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
