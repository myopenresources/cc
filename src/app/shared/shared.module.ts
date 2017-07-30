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
import {HttpPaginationComponent} from './pagination/http-pagination.component';

//datepickerI18n
import {DatepickerI18n,DatepickerI18nType} from './datepickerI18n/datepickerI18n';

//imgCropperSelect
import {ImgCropperSelectDirective} from './img-cropper-select/img-cropper-select.directive';

//tree
import {TreeComponent} from './tree/tree.component';
import {TreeNodeComponent} from './tree/tree-node.component';
import {SelectTreeComponent} from './tree/select-tree.component';

//ztree
import {ZtreeComponent} from './ztree/ztree.component';
import {SelectZtreeComponent} from './ztree/select-ztree.component';

//imgSelect
import {ImgSelectToBaseDirective} from './img-select/img-select-to-base.directive';

//switch
import {SwitchComponent} from './switch/switch.component';

//customScrollbar
import {CustomScrollbarDirective} from './custom-scrollbar/custom-scrollbar.directive';

//imageViewer
import {ImageViewerDirective} from './image-viewer/image-viewer.directive';



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
     PaginationComponent,
     HttpPaginationComponent,
     ImgCropperSelectDirective,
     TreeNodeComponent,
     TreeComponent,
     SelectTreeComponent,
     ZtreeComponent,
     SelectZtreeComponent,
     ImgSelectToBaseDirective,
     SwitchComponent,
     CustomScrollbarDirective,
     ImageViewerDirective
  ],
  providers:    [ModalService,DatepickerI18n,DatepickerI18nType],
  entryComponents : [ConfirmComponent,AlertComponent],
  exports:[
     HierarchyViewComponent,
     PaginationComponent,
     HttpPaginationComponent,
     ImgCropperSelectDirective,
     TreeComponent,
     TreeNodeComponent,
     SelectTreeComponent,
     ZtreeComponent,
     SelectZtreeComponent,
     ImgSelectToBaseDirective,
     SwitchComponent,
     CustomScrollbarDirective,
     ImageViewerDirective
  ]
})
export class SharedModule { }
