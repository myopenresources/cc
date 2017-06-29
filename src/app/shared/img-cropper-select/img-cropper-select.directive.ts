import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';

/**
 * 图片裁剪选择指令
 */
@Directive({
    selector: '[c-img-cropper-select]',
})
export class ImgCropperSelectDirective {

    @Input() public cropper: ImageCropperComponent;

    constructor(private elementRef: ElementRef) { }

    @HostListener('change')
    public onChange(): any {
        let files = this.elementRef.nativeElement.files;
        if (files && files.length > 0) {
            let image: any = new Image();
            let file: File = files[0];
            let myReader: FileReader = new FileReader();
            let that = this;
            myReader.onloadend = function (loadEvent: any) {
                image.src = loadEvent.target.result;
                that.cropper.setImage(image);
            };
            myReader.readAsDataURL(file);
        }
    }
}