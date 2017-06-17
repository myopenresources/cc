import {Component,Input,OnInit} from '@angular/core';

import {HierarchyViewData} from './hierarchy-view-model'





/**
 * 层次图
 */
@Component({
    selector : 'hierarchy-view',
    templateUrl : './hierarchy-view.component.html'
})
export class HierarchyViewComponent implements OnInit  {

   @Input()
   data: HierarchyViewData;
   @Input()
   nodeWidth:number=43;

   boxWidth:string;

   constructor(){
       
   }


   /**
   * 初始化
   */
   ngOnInit() {
      //计算宽度
      this.boxWidth=this.data.total*this.nodeWidth+"px";
   }


}
