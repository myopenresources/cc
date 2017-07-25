import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


import {DemoComponent} from './demo.component';
import { ToastDemoComponent } from './toast-demo.component';
import { ModalDemoComponent } from './modal-demo.component';
import { NgxChartsDemoComponent } from './ngx-charts-demo.component';
import { MultiSelectDemoComponent } from './multiselect-dropdown-demo.component';
import { HierarchyViewDemoComponent } from './hierarchy-view-demo.component';
import { ImgCropperDemoComponent } from './img-cropper-demo.component';
import { SelectDemoComponent } from './select-demo.component';
import { PaginationDemoComponent } from './pagination-demo.component';
import { HttpPaginationDemoComponent } from './http-pagination-demo.component';
import { SwitchDemoComponent } from './switch-demo.component';
import { TimelineDemoComponent } from './timeline-demo.component';
import { DatepickerDemoComponent } from './datepicker-demo.component';
import { TreeDemoComponent } from './tree-demo.component';
import { ZtreeDemoComponent } from './ztree-demo.component';
import { ImgSelectToBaseDemoComponent } from './img-select-to-base-demo.component';
import { FileUploadDemoComponent } from './file-upload-demo.component';
import { CustomScrollbarDemoComponent } from './custom-scrollbar-demo.component';


/**
 * demo路由
 */
const routes: Routes = [
    {
        path: '', 
        component: DemoComponent,
        children: [
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
            },
            {
                path: 'customScrollbarDemo',
                component: CustomScrollbarDemoComponent
            }
        ]
    }
]


export const demoRoutes = RouterModule.forChild(routes);