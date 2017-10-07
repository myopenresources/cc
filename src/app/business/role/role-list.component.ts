import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../app.service';

import {HttpPaginationComponent} from '../../shared/pagination/http-pagination.component';

@Component({
  selector: 'c-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent  {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string="";

  param:any = {}


  pageList:Array<number>= [15, 25, 35]

   constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("角色列表");
  }

  onDataChanged($event){
    console.info($event)
  }
}