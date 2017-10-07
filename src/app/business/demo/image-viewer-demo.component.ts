import { Component,Injectable, OnInit } from '@angular/core';

import { AppService } from '../../app.service';


@Component({
  selector: 'c-image-viewer-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <button type="button" class="btn btn-danger c-mb15" (click)="toggle()">切换</button>
              <div class="row c-mb15">
                    <div  class="col-md-12">
                        <div class="card-deck"  c-image-viewer (onViewInit)="onViewInit($event)">
                                <div class="card">
                                    <img class="card-img-top" src="assets/img/cc/cc-1.png"  style="width:100%;height:60%">
                                    <div class="card-block">
                                    <h4 class="card-title">登录页面</h4>
                                    <p class="card-text">点击上方的图片使用图片查看器查看</p>
                                    <p class="card-text"><small class="text-muted">2017-7-30</small></p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="assets/img/cc/cc-2.png" alt="主页面" style="width:100%;height:60%">
                                    <div class="card-block">
                                    <h4 class="card-title">主页面</h4>
                                    <p class="card-text">一个基于angular4.1.3+ng-bootstrap1.0.0-alpha.25+bootstrap4.0.0-alpha.6+scss的后台管理系统界面</p>
                                    <p class="card-text"><small class="text-muted">2017-7-30</small></p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="assets/img/cc/cc-3.png" alt="头像更换" style="width:100%;height:60%">
                                    <div class="card-block">
                                    <h4 class="card-title">头像更换</h4>
                                    <p class="card-text">一个基于angular4.1.3+ng-bootstrap1.0.0-alpha.25+bootstrap4.0.0-alpha.6+scss的后台管理系统界面</p>
                                    <p class="card-text"><small class="text-muted">2017-7-30</small></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
               </div>
    
               <div class="row c-mb15">
                  <div  class="col-md-12">
                       <span class="text-danger">点击查看大图&gt;&gt;</span> <img data-original="assets/img/cc/cc-3.png" src="assets/img/cc/cc-1.png" c-image-viewer [options]="options"  style="width:20px;height:20px">
                   </div>
               </div>
               
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
                 组件目录:src/app/modules/shared/image-viewer，配置参考：https://github.com/fengyuanchen/viewer#methods或http://www.cnblogs.com/yi0921/p/7080284.html
             </div>
           </div>
        </div>
    </div>
  `
})
export class ImageViewerDemoComponent {
  options:any={
      url:'data-original',
      transition:false
  }
  instance:any;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("图片查看器");
  }

  onViewInit(instance){
        this.instance=instance;
  }
    
  toggle(){
     this.instance.toggle();
  }

  
}
