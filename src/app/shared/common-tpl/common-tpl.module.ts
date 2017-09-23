import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {HeaderTpl} from './common-tpl';

/**
 * 公共模版模块
 */
@NgModule({
  imports:      [
     CommonModule
  ],
  declarations: [
     HeaderTpl
  ],
  exports:[
     HeaderTpl
  ]
})
export class CommonTplModule { }