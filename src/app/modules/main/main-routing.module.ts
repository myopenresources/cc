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
      }


      
];

export const mainRouting = RouterModule.forChild(mainRoutes);
