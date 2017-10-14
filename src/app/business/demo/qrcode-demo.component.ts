import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';



@Component({
  selector: 'c-qrcode-demo',
  templateUrl: './qrcode-demo.component.html'
})
export class QrcodeDemoComponent {

  val:string='https://github.com/332557712/cc';
 

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("二维码生成示例");
  }


}

