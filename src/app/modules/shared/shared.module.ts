import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//modal
import { ModalService } from './modal/modal.service';
import { ConfirmComponent }   from './modal/confirm.component';
import { AlertComponent} from './modal/alert.component';

//toast
import {ToastService} from './toast/toast.service';
import {ToastBoxComponent} from './toast/toast-box.component';
import {ToastComponent} from './toast/toast.component';

//hierarchy view
import {HierarchyViewComponent} from './hierarchy-view/hierarchy-view.component';
import {HierarchyViewNodeComponent} from './hierarchy-view/hierarchy-view-node.component';


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
     ToastComponent,
     HierarchyViewComponent,
     HierarchyViewNodeComponent
  ],
  providers:    [ModalService,ToastService],
  entryComponents : [ConfirmComponent,AlertComponent],
  exports:[ToastBoxComponent,HierarchyViewComponent]
})
export class SharedModule { }
