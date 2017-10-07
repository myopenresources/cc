import { Component,Injectable, OnInit } from '@angular/core';

import { AppService } from '../../app.service';


@Component({
  selector: 'c-custom-scrollbar-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <div  class="col-md-6" style="height:200px;border:1px solid #ddd" c-custom-scrollbar>
                <div class="input-group"  >
                    <div style="height:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                    <div style="height:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                    <div style="height:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                </div>
              </div>
              <div   style="height:200px;width:200px;border:1px solid #ddd" c-custom-scrollbar [options]="options">
                    <div style="height:500px;width:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                    <div style="height:500px;width:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                    <div style="height:500px;width:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
              </div>
               <div   style="height:200px;width:200px;border:1px solid #ddd" c-custom-scrollbar [options]="options2">
                    <div style="height:500px;width:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                    <div style="height:500px;width:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
                    <div style="height:500px;width:500px">这里的内容很多...这里的内容很多...这里的内容很多...这里的内容很多...</div>
              </div>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
                 组件目录:src/app/modules/shared/custom-scrollbar，配置参考：http://manos.malihu.gr/jquery-custom-content-scroller/
             </div>
           </div>
        </div>
    </div>
  `
})
export class CustomScrollbarDemoComponent {

   options: any = {
         axis: 'x',
         theme: 'minimal-dark',
         autoDraggerLength:true
    };

     options2: any = {
         axis: 'xy',
         theme: 'minimal-dark',
         autoDraggerLength:true
    };


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("模拟滚动条");
  }

  
}
