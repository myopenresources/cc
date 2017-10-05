import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import {AlertComponent} from './alert.component';
import {ConfirmComponent} from './confirm.component';
import { ModalService } from './modal.service';


/**
 *  模态框模块
 */
@NgModule({
  imports:[
     CommonModule,
     NgbModule
  ],
  declarations: [
     AlertComponent,
     ConfirmComponent
  ],
  providers:[ModalService],
  entryComponents:[
     AlertComponent,
     ConfirmComponent
  ]
})
export class ModalModule { }