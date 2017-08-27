import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ng2-img-cropper';
import  { SharedModule }       from '../shared/shared.module';

import { MainComponent }   from './main.component';
import { SidebarMenuComponent }   from './sidebar-menu.component';
import { TreeviewMenuComponent }   from './treeview-menu.component';
import { AvatarCropperComponent} from './avatar-cropper.component';
import { PasswordEditComponent} from './password-edit.component';


import { MainRoutingModule } from './main-routing.module';


/**
 * 主体模块
 */
@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     NgbModule,
     MainRoutingModule,
     ImageCropperModule,
     SharedModule
  ],
  declarations: [
     MainComponent,
     SidebarMenuComponent,
     TreeviewMenuComponent,
     AvatarCropperComponent,
     PasswordEditComponent
  ],
  exports:      [],
  entryComponents:[AvatarCropperComponent,PasswordEditComponent],
  providers:    []
})
export class MainModule {
}
