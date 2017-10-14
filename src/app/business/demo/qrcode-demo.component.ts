import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';
import { QrcodeComponent } from '../../shared/qrcode/qrcode.component'



@Component({
  selector: 'c-qrcode-demo',
  templateUrl: './qrcode-demo.component.html'
})
export class QrcodeDemoComponent {
  @ViewChild('qr') qr: QrcodeComponent;

  val:string='https://github.com/332557712/cc';
 

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("二维码生成示例");
  }

  getData(){
    console.info(this.qr.toDataURL());
  }

}

