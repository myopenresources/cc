import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'c-sys-log',
  templateUrl: './sys-log.component.html',
  styleUrls: ['./sys-log.component.scss']
})
export class SysLogComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("系统日志");
  }
  

  ngOnInit() {
  }

}
