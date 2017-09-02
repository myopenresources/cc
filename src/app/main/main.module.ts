import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { SharedModule }       from '../shared/shared.module';
import  { UserSharedModule }       from '../business-shared/user/user-shared.module';

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
     SharedModule,
     UserSharedModule
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
