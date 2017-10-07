import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';

import { LocalStorageService } from '../../shared/storage/local-storage.service';
import { SessionStorageService } from '../../shared/storage/session-storage.service';

@Component({
  selector: 'c-storage-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例（可以用在参数的传递）</p>
          </div>
        </div>
        <div class="row c-mt15">
            <div class="col-md-12">
                <h6>存储分为sessionStorage与localStorage查看控制台结果</h6>
                <button type="button" class="btn btn-info" (click)="setVal()">设置值</button>
                <button type="button" class="btn btn-info" (click)="getVal()">获取值</button>
                <button type="button" class="btn btn-success" (click)="setObj()">设置对象</button>
                <button type="button" class="btn btn-success" (click)="getObj()">获取对象</button>
            </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
                  组件目录:src/app/modules/shared/storage
             </div>
           </div>
        </div>
    </div>
  `
})
export class StorageDemoComponent {

  constructor(private appService: AppService,private lgs:LocalStorageService) {
    
    this.appService.titleEventEmitter.emit("本地存储");
  }

  setVal(){
    this.lgs.set('v1','aaaa');
  }

  getVal(){
    console.info(this.lgs.get('v1'));
  }

  setObj(){
    this.lgs.setObject('o1',{'v1':'123'});
  }

  getObj(){
    console.info(this.lgs.getObject('o1'));
  }

}
