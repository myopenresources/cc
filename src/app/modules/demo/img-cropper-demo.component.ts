import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';

@Component({
    selector: 'img-cropper-demo',
    template: `
     <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
               <div class="c-img-cropper-box">
                  <img-cropper #cropper [image]="data1" [settings]="cropperSettings" (onCrop)="cropped($event)"></img-cropper>
                  <div  class="c-file-upload">
                     <button class="btn btn-primary ">浏览图片</button>
                     <input id="image-input" type="file" (change)="fileChangeListener($event)">
                  </div>
                   <div class="c-mt15" *ngIf="data1.image">
                      <img class="center-block img-responsive" [class.img-circle]="cropperSettings.rounded"  [src]="data1.image" [width]="cropperSettings.croppedWidth" [height]="cropperSettings.croppedHeight">
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
export class ImgCropperDemoComponent implements OnInit {

    name: string;
    data1: any;
    cropperSettings: CropperSettings;

    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

    constructor() {
        this.name = 'Angular2';
        this.cropperSettings = new CropperSettings();

        this.cropperSettings.noFileInput = true;

        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;

        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;

        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 500;

        this.cropperSettings.minWidth = 100;
        this.cropperSettings.minHeight = 100;

        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

        this.cropperSettings.rounded = true;

        this.data1 = {};
    }

    ngOnInit() {
    }


    cropped(bounds: Bounds) {
        console.info(bounds);
        console.info(this.data1.image);
    }

    fileChangeListener($event) {
        let image: any = new Image();
        let file: File = $event.target.files[0];
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = function(loadEvent: any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };

        myReader.readAsDataURL(file);
    }

    

}
