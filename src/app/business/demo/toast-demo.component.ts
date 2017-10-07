import { Component, OnInit } from '@angular/core';

import  { AppService }   from '../../app.service';

import {ToastService} from '../../shared/toast/toast.service';
import {ToastConfig,ToastType} from '../../shared/toast/toast-model';


@Component({
  selector: 'c-toast-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <button type="button" class="btn btn-info" (click)="openInfo()">信息消息</button>
              <button type="button" class="btn btn-warning" (click)="openWarning()">警告消息</button>
              <button type="button" class="btn btn-success" (click)="openSuccess()">成功消息</button>
              <button type="button" class="btn btn-danger" (click)="openError()">错误消息</button>
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
export class ToastDemoComponent{

  constructor(private toastService: ToastService,private appService:AppService){
     this.appService.titleEventEmitter.emit("消息框");
  }

  openInfo(){
     const toastCfg = new ToastConfig(ToastType.INFO,'','这是一条INFO消息!', 3000);
     this.toastService.toast(toastCfg);
  }


  openWarning(){
     const toastCfg = new ToastConfig(ToastType.WARNING,'','这是一条WARNING消息!', 3000);
     this.toastService.toast(toastCfg);
  }

  openSuccess(){
     const toastCfg = new ToastConfig(ToastType.SUCCESS,'','这是一条SUCCESS消息!', 3000);
     this.toastService.toast(toastCfg);
  }

  openError(){
     const toastCfg = new ToastConfig(ToastType.ERROR,'','这是一条ERROR消息!', 3000);
     this.toastService.toast(toastCfg);
  }



}