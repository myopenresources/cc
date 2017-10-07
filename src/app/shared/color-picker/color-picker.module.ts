import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

 
 
import {ColorPickerComponent} from './color-picker.component';

/**
 * 颜色选择器模块
 */
@NgModule({
  imports:      [
     CommonModule,
     FormsModule
  ],
  declarations: [
    ColorPickerComponent
  ],
  exports:[
    ColorPickerComponent
  ]
})
export class ColorPickerModule { }