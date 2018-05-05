import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ChatComponent } from './chat/chat.component';
import { TimelineRoutingModule } from './/timeline-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimelineRoutingModule
  ],
  declarations: [
    ChatComponent
  ]
})
export class TimelineModule { }
