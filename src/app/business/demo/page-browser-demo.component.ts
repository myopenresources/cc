import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageBrowserConfig } from '../../shared/page-browser/page-browser-model'
import { AppService } from '../../app.service';

@Component({
    selector: 'c-page-demo-browser',
    templateUrl: './page-browser-demo.component.html'
})

export class PageBrowserDemoComponent {
    

    config:PageBrowserConfig={
        title:'http://www.baidu.com/',
        url:'http://www.baidu.com/'
    }

     constructor(private appService:AppService) {
      this.appService.titleEventEmitter.emit("页面浏览器");
  }
}