import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {ImageViewerDirective} from './image-viewer.directive';


/**
 *  图片查看器
 */
@NgModule({
  imports:[
     CommonModule
  ],
  declarations: [
     ImageViewerDirective
  ],
  exports:[
     ImageViewerDirective
  ]
})
export class ImageViewerModule { }