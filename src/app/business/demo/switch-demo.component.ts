import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';

import { SwitchTheme } from '../../shared/switch/switch-model';



@Component({
  selector: 'c-switch-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <div style="width:50px;">
                  <c-switch [(ngModel)]="swbtn" (onChange)="change($event)"></c-switch>
              </div>
              <div style="width:100px;">
                  <c-switch [(ngModel)]="swbtn" [disabled]="true"></c-switch>
              </div>
              <div style="width:150px;">
                  <c-switch [(ngModel)]="swbtn" [onLabel]="'这边是开'"  [offLabel]="'这边是关'"></c-switch>
              </div>
              <div style="width:100px;">
                   <c-switch ></c-switch>
              </div>
              <div style="width:100px;">
                   <c-switch [checked]='true' ></c-switch>
              </div>
              <div style="width:100px;">
                   <c-switch [(ngModel)]="swbtn"  ></c-switch>
              </div>
              <div style="width:100px;">
                   <c-switch [theme]="theme" [checked]='true'  ></c-switch>
              </div>
              <div style="width:100px;">
                   <c-switch [theme]="theme2" [checked]='true'   ></c-switch>
              </div>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
                  组件目录:src/app/modules/shared/switch
             </div>
           </div>
        </div>
    </div>
  `
})
export class SwitchDemoComponent {
  swbtn: boolean = true;
  theme:string=SwitchTheme.THTME_WARNING;
  theme2:string=SwitchTheme.THTME_SUCCESS;

  constructor(private appService: AppService) {
    
    this.appService.titleEventEmitter.emit("开关按钮");
  }

 

  change($event){
    console.info(this.swbtn);
  }
}
