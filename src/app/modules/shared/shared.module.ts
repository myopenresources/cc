import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from './modal/modal.service';
import { ConfirmComponent }   from './modal/confirm.component';
import { AlertComponent} from './modal/alert.component';

import {ToastService} from './toast/toast.service';
import {ToastBoxComponent} from './toast/toast-box.component';
import {ToastComponent} from './toast/toast.component';


@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule
  ],
  declarations: [
     ConfirmComponent,
     AlertComponent,
     ToastBoxComponent,
     ToastComponent
  ],
  providers:    [ModalService,ToastService],
  entryComponents : [ConfirmComponent,AlertComponent],
  exports:[ToastBoxComponent]
})
export class SharedModule { }
