import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../app.service';

import {HttpPaginationComponent} from '../../shared/pagination/http-pagination.component';

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent  {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string="";

  param:any = {
    name: 'admin',
    age: 16
  }

  dataList:Array<any>=[
    {
      userName:'user1',
      realName:'钱一',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user2',
      realName:'王二',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user3',
      realName:'张三',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user4',
      realName:'李四',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user5',
      realName:'王五',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:'2017-8-1'
    },
    {
      userName:'user1',
      realName:'钱一',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user2',
      realName:'王二',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user3',
      realName:'张三',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user4',
      realName:'李四',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user5',
      realName:'王五',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:'2017-8-1'
    },
    {
      userName:'user1',
      realName:'钱一',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user2',
      realName:'王二',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user3',
      realName:'张三',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user4',
      realName:'李四',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:''
    },
    {
      userName:'user5',
      realName:'王五',
      status:'可用',
      createDate:'2017-8-1',
      updateDate:'2017-8-1'
    }
    
  ]

  pageList:Array<number>= [15, 25, 35]

   constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("用户列表");
  }

  onDataChanged($event){
    console.info($event)
  }
}