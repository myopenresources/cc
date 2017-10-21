import { Component, OnInit, ViewChild } from '@angular/core';

import { AppService } from '../../app.service';

import { SimpleDataHttpPageComponent } from '../../shared/simple-data-table/simple-data-http-page.component';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'c-simple-data-table-demo',
  templateUrl: './simple-data-table-demo.component.html'
})
export class SimpleDataTableDemoComponent {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  @ViewChild('hp2', undefined) hp2: SimpleDataHttpPageComponent;

  url: string = environment.domain+"/system/user/findList";

  param: any = {
    name: 'admin',
    age: 16
  }

  pageList: Array<number> = [15, 25, 35]

  btnCls: string = 'btn-outline-info';



  url2: string = environment.domain+"/system/user/findList";

  param2: any = {
    name: 'admin',
    age: 16
  }

  pageList2: Array<number> = [15, 25, 35]

  btnCls2: string = 'btn-outline-info';


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("简单数据表格");

  }


  search() {
    this.param.age = 20;
    this.param.name = 'admin23';
    this.param.sex = '男';
    this.pageList = [10, 15, 20];

    this.hp.search();
  }


  search2() {
    this.param2.age = 15;
    this.param2.name = 'admin';
    this.param2.sex = '女';

    this.hp2.search();
  }




}