import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';

//第三方
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ImageCropperModule } from 'ng2-img-cropper';
import { SelectModule } from 'angular2-select';
import { Select2Module } from 'ng2-select2';
import {FileUploadModule } from 'ng2-file-upload';
import {DpDatePickerModule} from 'ng2-date-picker';
import {AgGridModule} from "ag-grid-angular/main";

//自定义
import  { EditorModule }       from '../../shared/editor/editor.module'; //富文本
import  { CommonTplModule}       from '../../shared/common-tpl/common-tpl.module'; //公共模版
import  { HierarchyViewModule}       from '../../shared/hierarchy-view/hierarchy-view.module'; //层次图
import  { CustomScrollbarModule}       from '../../shared/custom-scrollbar/custom-scrollbar.module';//滚动条
import  { PaginationModule}       from '../../shared/pagination/pagination.module';//分页
import  { DatepickerI18nModule}       from '../../shared/datepickerI18n/datepickerI18n.module';//日期i18n
import  { ImgCropperSelectModule}       from '../../shared/img-cropper-select/img-cropper-select.module';//图片裁剪模块
import  { TreeModule}            from '../../shared/tree/tree.module';//树
import  { ZtreeModule}            from '../../shared/ztree/ztree.module';//ztree
import  { ImgSelectModule}            from '../../shared/img-select/img-select.module';//图片选择
import  { SwitchModule}            from '../../shared/switch/switch.module';//开关
import  { PageBrowserModule}            from '../../shared/page-browser/page-browser.module';//页面浏览器
import  { ImageViewerModule}            from '../../shared/image-viewer/image-viewer.module';//图片查看器
import  { ModalModule}            from '../../shared/modal/modal.module';//模态框
import  { SimpleDataTableModule}            from '../../shared/simple-data-table/simple-data-table.module';//模态框
import  { ColorPickerModule}            from '../../shared/color-picker/color-picker.module';//颜色选择器
import  { StepModule}            from '../../shared/step/step.module';//步骤条
import  { QrcodeModule}            from '../../shared/qrcode/qrcode.module';//二维码

//路由
import { DemoRoutingModule  } from './demo-routing.module';


import {DemoComponent} from './demo.component';
import {ToastDemoComponent} from './toast-demo.component';
import {ModalDemoComponent} from './modal-demo.component';
import {NgxChartsDemoComponent} from './ngx-charts-demo.component';
import {MultiSelectDemoComponent} from './multiselect-dropdown-demo.component';
import {HierarchyViewDemoComponent} from './hierarchy-view-demo.component';
import {ImgCropperDemoComponent} from './img-cropper-demo.component';
import {SelectDemoComponent} from './select-demo.component';
import {PaginationDemoComponent} from './pagination-demo.component';
import {HttpPaginationDemoComponent} from './http-pagination-demo.component';
import {SwitchDemoComponent} from './switch-demo.component';
import {TimelineDemoComponent} from './timeline-demo.component';
import {DatepickerDemoComponent} from './datepicker-demo.component';
import {TreeDemoComponent} from './tree-demo.component';
import {ZtreeDemoComponent} from './ztree-demo.component';
import {ImgSelectToBaseDemoComponent} from './img-select-to-base-demo.component';
import {FileUploadDemoComponent} from './file-upload-demo.component';
import { CustomScrollbarDemoComponent } from './custom-scrollbar-demo.component';
import { ImageViewerDemoComponent } from './image-viewer-demo.component';
import { SpinDemoComponent } from './spin-demo.component';
import { NgBootstrapDemoComponent } from './ng-bootstrap-demo.component';
import { BootstrapDemoComponent } from './bootstrap-demo.component';
import { StorageDemoComponent } from './storage-demo.component';
import { PageBrowserDemoComponent } from './page-browser-demo.component';
import { EditorDemoComponent } from './editor-demo.component';
import { AgGridDemoComponent } from './ag-grid-demo.component';
import { SimpleDataTableDemoComponent } from './simple-data-table-demo.component';
import { ColorPickerDemoComponent } from './color-picker-demo.component';
import { StepDemoComponent } from './step-demo.component';
import { ValidatorDemoComponent } from './validator-demo.component';
import { QrcodeDemoComponent } from './qrcode-demo.component';







@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     ReactiveFormsModule,
     HttpModule,
     NgbModule,
     NgxChartsModule,
     MultiselectDropdownModule,
     ImageCropperModule,
     SelectModule,
     Select2Module,
     FileUploadModule,
     DemoRoutingModule,
     DpDatePickerModule,
     EditorModule,
     CommonTplModule,
     HierarchyViewModule,
     CustomScrollbarModule,
     PaginationModule,
     DatepickerI18nModule,
     ImgCropperSelectModule,
     TreeModule,
     ZtreeModule,
     ImgSelectModule,
     SwitchModule,
     PageBrowserModule,
     ImageViewerModule,
     ModalModule,
     AgGridModule.withComponents([]),
     SimpleDataTableModule,
     ColorPickerModule,
     StepModule,
     QrcodeModule
  ],
  declarations: [
     DemoComponent,
     ToastDemoComponent,
     ModalDemoComponent,
     NgxChartsDemoComponent,
     MultiSelectDemoComponent,
     HierarchyViewDemoComponent,
     ImgCropperDemoComponent,
     SelectDemoComponent,
     PaginationDemoComponent,
     HttpPaginationDemoComponent,
     SwitchDemoComponent,
     TimelineDemoComponent,
     DatepickerDemoComponent,
     TreeDemoComponent,
     ZtreeDemoComponent,
     ImgSelectToBaseDemoComponent,
     FileUploadDemoComponent,
     CustomScrollbarDemoComponent,
     ImageViewerDemoComponent,
     SpinDemoComponent,
     NgBootstrapDemoComponent,
     BootstrapDemoComponent,
     StorageDemoComponent,
     PageBrowserDemoComponent,
     EditorDemoComponent,
     AgGridDemoComponent,
     SimpleDataTableDemoComponent,
     ColorPickerDemoComponent,
     StepDemoComponent,
     ValidatorDemoComponent,
     QrcodeDemoComponent
  ],
  exports:      [ 
  ],
  providers:    []
})
export class DemoModule { }
