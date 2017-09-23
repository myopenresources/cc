import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

 
import {CommonTplModule} from '../common-tpl/common-tpl.module';
 
import {EditorComponent} from './editor.component';

/**
 * 富文本编辑器模块
 */
@NgModule({
  imports:      [
     CommonModule,
     FormsModule,
     CommonTplModule
  ],
  declarations: [
     EditorComponent
  ],
  exports:[
     EditorComponent
  ]
})
export class EditorModule { }