import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'c-toast-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <ui-switch [(ngModel)]="swbtn"></ui-switch>
              <ui-switch [checked]="false"></ui-switch>
              <ui-switch checked></ui-switch>
              <ui-switch (change)="onChange($event)"></ui-switch>
              <ui-switch size="small"></ui-switch>
              <ui-switch size="large"></ui-switch>
              <ui-switch color="red" switchColor="yellow"></ui-switch>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
              组件目录:src/app/modules/shared/toast
             </div>
           </div>
        </div>
    </div>
  `
})
export class UiSwitchDemoComponent {
  swbtn: boolean = false;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("开关按钮");
  }

  onChange($event) {
    this.swbtn = $event;
  }
}
