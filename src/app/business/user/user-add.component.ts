import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'c-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("用户添加");
  }
}