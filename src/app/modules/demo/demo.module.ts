import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ToastDemoComponent} from './toast-demo.component'
import {ModalDemoComponent} from './modal-demo.component'
import {NgxChartsComponent} from './ngx-charts.component'




@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule,
     NgxChartsModule
  ],
  declarations: [
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsComponent
  ],
  exports:      [
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsComponent
  ],
  providers:    []
})
export class DemoModule { }
