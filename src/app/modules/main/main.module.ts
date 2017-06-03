import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent }   from './main.component';
import { SidebarMenuComponent }   from './sidebar-menu.component';
import { TreeviewMenuComponent }   from './treeview-menu.component';

import { mainRouting } from './main-routing.module';
import  { HomeModule }      from '../home/home.module';

//demo
import  { DemoModule }       from '../demo/demo.module';



@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule,
     mainRouting,
     HomeModule,
     DemoModule
  ],
  declarations: [
     MainComponent,
     SidebarMenuComponent,
     TreeviewMenuComponent
  ],
  exports:      [
    MainComponent
  ],
  providers:    []
})
export class MainModule { }
