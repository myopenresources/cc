import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';

import { ToastService } from '../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../shared/toast/toast-model';

import {HttpPaginationComponent} from '../../shared/pagination/http-pagination.component';


@Component({
  selector: 'c-http-pagination-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <div  class="c-mt15">
                  <button type="button" class="btn btn-primary" (click)="search()">查询</button>
                  <c-http-pagination #hp [url]="url" method="post" [param]="param"  [pageList]="pageList" [btnCls]="btnCls" (onDataChanged)="onDataChanged($event)"></c-http-pagination>
              </div>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
              组件目录:src/app/modules/shared/pagination
             </div>
           </div>
        </div>
    </div>
  `
})
export class HttpPaginationDemoComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string="http://192.168.1.107:8080/cjhme/user/login.jhtml";

  param:any = {
    name: 'admin',
    age: 16
  }

  pageList:Array<number>= [15, 25, 35]

  btnCls: string = 'btn-outline-info';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("HTTP分页");
  }

 
  onDataChanged($event){
    console.info($event)
  }


  search(){
     this.param.age=20;
     this.param.name='admin2';
     this.param.sex='男';
     this.pageList=[10, 15, 20];
     
     this.hp.search();
  }



}