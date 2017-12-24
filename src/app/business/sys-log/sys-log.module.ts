import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysLogRoutingModule } from './sys-log-routing.module';
import {SysLogComponent} from './sys-log.component'

@NgModule({
  imports: [
    CommonModule,
    SysLogRoutingModule
  ],
  declarations: [
    SysLogComponent
  ]
})
export class SysLogModule { }
