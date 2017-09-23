import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import {SelectZtreeComponent} from './select-ztree.component';
import {ZtreeComponent} from './ztree.component';


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
     ZtreeComponent,
     SelectZtreeComponent
  ],
  exports:[
     ZtreeComponent,
     SelectZtreeComponent
  ]
})
export class ZtreeModule { }