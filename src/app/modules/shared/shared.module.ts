import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//modal
import { ModalService } from './modal/modal.service';
import { ConfirmComponent }   from './modal/confirm.component';
import { AlertComponent} from './modal/alert.component';

//hierarchy view
import {HierarchyViewComponent} from './hierarchy-view/hierarchy-view.component';
import {HierarchyViewNodeComponent} from './hierarchy-view/hierarchy-view-node.component';

//pagination
import {PaginationComponent} from './pagination/pagination.component';

/**
 * 公共模块
 */
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
     HierarchyViewComponent,
     HierarchyViewNodeComponent,
     PaginationComponent
  ],
  providers:    [ModalService],
  entryComponents : [ConfirmComponent,AlertComponent],
  exports:[HierarchyViewComponent,PaginationComponent]
})
export class SharedModule { }
