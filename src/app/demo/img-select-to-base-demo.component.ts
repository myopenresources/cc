import { Component, OnInit, ViewChild } from '@angular/core';

import  { AppService }   from '../app.service';


@Component({
    selector: 'c-img-select-to-base-demo',
    template: `
     <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
               <div>
                  <div  class="c-file-upload">
                     <button class="btn btn-primary ">浏览图片</button>
                     <input id="image-input" type="file" c-img-select-to-base (onLoad)="onLoad($event);">
                  </div>
                   <div class="c-mt15" *ngIf="img">
                      <img class="center-block"   [src]="img" >
                   </div>
               </div>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
                 <p class="c-line-title">说明</p>
                 第三方组件:ng2-img-cropper
            </div>
          </div>
         </div>
     </div>
    `
})
export class ImgSelectToBaseDemoComponent {
   img:any;
  
  onLoad(img){
      console.info(img);
      this.img=img;
  } 
 

    

}
