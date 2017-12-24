import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'c-sys-monitor',
  templateUrl: './sys-monitor.component.html',
  styleUrls: ['./sys-monitor.component.scss']
})
export class SysMonitorComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("系统监控");
  }
  
  ngOnInit() {
  }

}
