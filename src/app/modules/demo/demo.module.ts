import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import {ToastDemoComponent} from './toast-demo.component'
import {ModalDemoComponent} from './modal-demo.component'
import {NgxChartsDemoComponent} from './ngx-charts-demo.component'
import {MultiSelectDemoComponent} from './multiselect-dropdown-demo.component'



@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule,
     NgxChartsModule,
     MultiselectDropdownModule
  ],
  declarations: [
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsDemoComponent,
     MultiSelectDemoComponent

  ],
  exports:      [
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsDemoComponent,
     MultiSelectDemoComponent
  ],
  providers:    []
})
export class DemoModule { }
