import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';



@Component({
  selector: 'c-validator-demo',
  templateUrl: './validator-demo.component.html'
})
export class ValidatorDemoComponent {
 

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("验证器示例");
  }


}

