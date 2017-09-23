import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import {SelectTreeComponent} from './select-tree.component';
import {TreeNodeComponent} from './tree-node.component';
import {TreeComponent} from './tree.component';


/**
 *  树模块
 */
@NgModule({
  imports:[
     CommonModule,
     FormsModule,
     NgbModule
  ],
  declarations: [
     TreeNodeComponent,
     TreeComponent,
     SelectTreeComponent
  ],
  exports:[
      TreeComponent,
     SelectTreeComponent
  ]
})
export class TreeModule { }