import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { UserSharedModule }       from '../business-shared/user/user-shared.module';
import  { CustomScrollbarModule}       from '../shared/custom-scrollbar/custom-scrollbar.module';
import  { ModalModule}            from '../shared/modal/modal.module';

import { MainComponent }   from './main.component';
import { SidebarMenuComponent }   from './sidebar-menu.component';
import { TreeviewMenuComponent }   from './treeview-menu.component';



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
     UserSharedModule,
     CustomScrollbarModule,
     ModalModule
  ],
  declarations: [
     MainComponent,
     SidebarMenuComponent,
     TreeviewMenuComponent
  ],
  exports:      [],
  providers:    []
})
export class MainModule {
}
