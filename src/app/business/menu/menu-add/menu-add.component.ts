import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'c-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("菜单添加");
  }

  ngOnInit() {
  }

}
