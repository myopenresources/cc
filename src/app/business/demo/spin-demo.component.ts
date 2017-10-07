import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';
import { SpinService } from '../../shared/spin/spin.service';


@Component({
  selector: 'c-spin-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <button type="button" class="btn btn-danger c-mb15" (click)="show()">显示(1秒后自动关闭)</button>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
                  组件目录:src/app/modules/shared/spin
             </div>
           </div>
        </div>
    </div>
  `
})
export class SpinDemoComponent {
 
  constructor(private appService: AppService,private spinService:SpinService) {
    
    this.appService.titleEventEmitter.emit("旋转动画");
  }

  show(){
       this.spinService.spin(true);
       setTimeout(() => {
         this.spinService.spin(false);
       },1000);
  }

}
