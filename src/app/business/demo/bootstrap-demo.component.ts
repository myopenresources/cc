import { Component, OnInit } from '@angular/core';

import  { AppService }   from '../../app.service';


@Component({
  selector: 'c-bootstrap-demo',
  templateUrl:'./bootstrap-demo.component.html'
})
export class BootstrapDemoComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };

  public isCollapsed = false;

  constructor(private appService:AppService) {
      this.appService.titleEventEmitter.emit("bootstrap示例");
  }




}