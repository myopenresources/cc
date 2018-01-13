import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'c-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("菜单查询");
  }

  ngOnInit() {
  }

}
