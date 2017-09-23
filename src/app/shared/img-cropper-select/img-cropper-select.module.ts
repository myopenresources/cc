import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {ImgCropperSelectDirective} from './img-cropper-select.directive';


/**
 *  图片裁剪模块
 */
@NgModule({
  imports:      [
     CommonModule
  ],
   declarations: [
     ImgCropperSelectDirective
  ],
  exports:[
     ImgCropperSelectDirective
  ]
})
export class ImgCropperSelectModule { }


