import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
 
import {SwitchComponent} from './switch.component';


/**
 *  开关模块
 */
@NgModule({
  imports:[
     CommonModule,
     FormsModule
  ],
  declarations: [
     SwitchComponent
  ],
  exports:[
     SwitchComponent
  ]
})
export class SwitchModule { }