import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SysMonitorRoutingModule } from './sys-monitor-routing.module';
import {SysMonitorComponent} from './sys-monitor.component'

@NgModule({
  imports: [
    CommonModule,
    SysMonitorRoutingModule
  ],
  declarations: [
    SysMonitorComponent
  ]
})
export class SysMonitorModule { }
