import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {QrcodeComponent} from './qrcode.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QrcodeComponent
  ],
  exports:[
    QrcodeComponent
 ]
})
export class QrcodeModule { }
