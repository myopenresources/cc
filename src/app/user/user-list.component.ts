import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent  {

   constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("用户列表");
  }
}