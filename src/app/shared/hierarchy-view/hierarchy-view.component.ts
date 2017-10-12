import {Component,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

import {HierarchyViewData} from './hierarchy-view-model'





/**
 * 层次图组件
 */
@Component({
    selector : 'c-hierarchy-view',
    templateUrl : './hierarchy-view.component.html',
    styleUrls:['./hierarchy-view.component.scss']
})
export class HierarchyViewComponent implements OnChanges  {

   @Input()
   data: HierarchyViewData;
   @Input()
   nodeWidth:number=43;
   @Output()
   onClicked= new EventEmitter();

   //盒子宽度
   boxWidth:string;

   options: any = {
         axis: 'x',
         theme: 'minimal-dark',
         autoDraggerLength:true
    };

   constructor(){}


   /**
    * 改变
    * @param changes 
    */
   ngOnChanges(changes: SimpleChanges) {
      //计算宽度
      this.boxWidth=this.data.total*this.nodeWidth-this.data.total+"px";
   }

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
