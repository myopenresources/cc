import {Component,Input} from '@angular/core';

import {HierarchyViewNode} from './hierarchy-view-model'



/**
 * 层次图节点
 */
@Component({
    selector : 'hierarchy-view-node',
    templateUrl : './hierarchy-view-node.component.html'
})
export class HierarchyViewNodeComponent {
   
   @Input()
   data: HierarchyViewNode;

}
