import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from '../home/home.component';

//demo
import { ToastDemoComponent } from '../demo/toast-demo.component';
import { ModalDemoComponent } from '../demo/modal-demo.component';
import { NgxChartsDemoComponent } from '../demo/ngx-charts-demo.component';
import { MultiSelectDemoComponent } from '../demo/multiselect-dropdown-demo.component';
import { HierarchyViewDemoComponent } from '../demo/hierarchy-view-demo.component';
import { ImgCropperDemoComponent } from '../demo/img-cropper-demo.component';
import { SelectDemoComponent } from '../demo/select-demo.component';
import { PaginationDemoComponent } from '../demo/pagination-demo.component';
import { HttpPaginationDemoComponent } from '../demo/http-pagination-demo.component';
import { SwitchDemoComponent } from '../demo/switch-demo.component';
import { TimelineDemoComponent } from '../demo/timeline-demo.component';
import { DatepickerDemoComponent } from '../demo/datepicker-demo.component';
import { TreeDemoComponent } from '../demo/tree-demo.component';
import { ZtreeDemoComponent } from '../demo/ztree-demo.component';
import { ImgSelectToBaseDemoComponent } from '../demo/img-select-to-base-demo.component';
import {FileUploadDemoComponent} from '../demo/file-upload-demo.component';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
      {
            path: 'home',
            component: HomeComponent
      },
      {
            path: 'toastDemo',
            component: ToastDemoComponent
      },
      {
            path: 'modalDemo',
            component: ModalDemoComponent
      },
      {
            path: 'ngxChartsDemo',
            component: NgxChartsDemoComponent
      },
      {
            path: 'multiselectDropdownDemo',
            component: MultiSelectDemoComponent
      },
      {
            path: 'hierarchyViewDemo',
            component: HierarchyViewDemoComponent
      },
      {
            path: 'imgCropperDemo',
            component: ImgCropperDemoComponent
      },
      {
            path: 'selectDemo',
            component: SelectDemoComponent
      },
      {
            path: 'paginationDemo',
            component: PaginationDemoComponent
      },
      {
            path: 'httpPaginationDemo',
            component: HttpPaginationDemoComponent
      },
      {
            path: 'switchDemo',
            component: SwitchDemoComponent
      },
      {
            path: 'timelineDemo',
            component: TimelineDemoComponent
      },
      {
            path: 'datepickerDemo',
            component: DatepickerDemoComponent
      },
      {
            path: 'treeDemo',
            component: TreeDemoComponent
      },
      {
            path: 'ztreeDemo',
            component: ZtreeDemoComponent
      },
      {
            path: 'imgSelectToBaseDemo',
            component: ImgSelectToBaseDemoComponent
      },
      {
            path: 'fileUploadDemo',
            component: FileUploadDemoComponent
      }
];

export const mainRouting = RouterModule.forChild(mainRoutes);
