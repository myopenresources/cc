import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {ImgSelectToBaseDirective} from './img-select-to-base.directive';


/**
 *  图片选择模块
 */
@NgModule({
  imports:      [
     CommonModule
  ],
   declarations: [
     ImgSelectToBaseDirective
  ],
  exports:[
     ImgSelectToBaseDirective
  ]
})
export class ImgSelectModule { }


