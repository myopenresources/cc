import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ng2-img-cropper';
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { TreeviewMenuComponent } from './treeview-menu.component';
import { AvatarCropperComponent } from './avatar-cropper.component';


import { mainRoutes } from './main.routes';


//demo
import { DemoModule } from '../demo/demo.module';


/**
 * 主体模块
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    mainRoutes,
    ImageCropperModule,
    SharedModule,
    DemoModule
  ],
  declarations: [
    MainComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent,
    AvatarCropperComponent
  ],
  exports: [
    RouterModule,
    MainComponent
  ],
  entryComponents: [AvatarCropperComponent],
  providers: []
})
export class MainModule {
}
