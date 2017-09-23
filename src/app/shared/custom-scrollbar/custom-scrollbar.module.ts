import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {CustomScrollbarDirective} from './custom-scrollbar.directive';

/**
 *  滚动条模块
 */
@NgModule({
  imports:      [
     CommonModule
  ],
  declarations: [
     CustomScrollbarDirective
  ],
  exports:[
     CustomScrollbarDirective
  ]
})
export class CustomScrollbarModule { }