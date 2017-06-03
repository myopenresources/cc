import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ToastDemoComponent} from './toast-demo.component'
import {ModalDemoComponent} from './modal-demo.component'



@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule,
  ],
  declarations: [
     ToastDemoComponent,
     ModalDemoComponent
  ],
  exports:      [
     ToastDemoComponent,
     ModalDemoComponent
  ],
  providers:    []
})
export class DemoModule { }
