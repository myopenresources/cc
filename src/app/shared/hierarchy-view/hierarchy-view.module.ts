import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import  { CustomScrollbarModule}       from '../custom-scrollbar/custom-scrollbar.module';
 
import {HierarchyViewNodeComponent} from './hierarchy-view-node.component';
import {HierarchyViewComponent} from './hierarchy-view.component';

/**
 *  层次图模块
 */
@NgModule({
  imports:[
     CommonModule,
     CustomScrollbarModule
  ],
  declarations: [
     HierarchyViewNodeComponent,
     HierarchyViewComponent
  ],
  exports:[
     HierarchyViewComponent
  ]
})
export class HierarchyViewModule { }