import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import  { SharedModule }       from '../shared/shared.module';
import { ImageCropperModule } from 'ng2-img-cropper';
import { SelectModule } from 'angular2-select';
import { UiSwitchModule } from 'angular2-ui-switch'


import {ToastDemoComponent} from './toast-demo.component'
import {ModalDemoComponent} from './modal-demo.component'
import {NgxChartsDemoComponent} from './ngx-charts-demo.component'
import {MultiSelectDemoComponent} from './multiselect-dropdown-demo.component'
import {HierarchyViewDemoComponent} from './hierarchy-view-demo.component'
import {ImgCropperDemoComponent} from './img-cropper-demo.component'
import {SelectDemoComponent} from './select-demo.component'
import {PaginationDemoComponent} from './pagination-demo.component'
import {HttpPaginationDemoComponent} from './http-pagination-demo.component'
import {UiSwitchDemoComponent} from './ui-switch-demo.component'
import {TimelineDemoComponent} from './timeline-demo.component'





@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     ReactiveFormsModule,
     HttpModule,
     NgbModule,
     NgxChartsModule,
     MultiselectDropdownModule,
     SharedModule,
     ImageCropperModule,
     SelectModule,
     UiSwitchModule
  ],
  declarations: [
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsDemoComponent,
     MultiSelectDemoComponent,
     HierarchyViewDemoComponent,
     ImgCropperDemoComponent,
     SelectDemoComponent,
     PaginationDemoComponent,
     HttpPaginationDemoComponent,
     UiSwitchDemoComponent,
     TimelineDemoComponent
  ],
  exports:      [
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsDemoComponent,
     MultiSelectDemoComponent,
     HierarchyViewDemoComponent,
     ImgCropperDemoComponent,
     SelectDemoComponent,
     PaginationDemoComponent,
     HttpPaginationDemoComponent,
     UiSwitchDemoComponent,
     TimelineDemoComponent
  ],
  providers:    []
})
export class DemoModule { }
