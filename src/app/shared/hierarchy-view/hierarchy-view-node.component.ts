import {Component,Input,Output,EventEmitter} from '@angular/core';

import {HierarchyViewNode} from './hierarchy-view-model'



/**
 * 层次图节点组件
 */
@Component({
    selector : 'c-hierarchy-view-node',
    templateUrl : './hierarchy-view-node.component.html',
    styleUrls:['./hierarchy-view-node.component.scss']
})
export class HierarchyViewNodeComponent {
   
   @Input()
   data: HierarchyViewNode;
   @Output()
   onClicked= new EventEmitter();

   /**
    * 单击事件
    * @param node 节点
    */
    nodeClick(node){
       if(node.clickEnable===false){
          return ;
       }else{
           this.onClicked.emit(node);
       }
   }

}
