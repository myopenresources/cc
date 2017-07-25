import { Directive, Input, ElementRef, HostListener,Output,EventEmitter} from '@angular/core';

/**
 * 图片选择转换成base64
 */
@Directive({
    selector: '[c-img-select-to-base]'
})
export class ImgSelectToBaseDirective {

    @Output()
    onLoad = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    @HostListener('change')
    public onChange(): any {
        let files = this.elementRef.nativeElement.files;
        if (files && files.length > 0) {
            let file: File = files[0];
            let myReader: FileReader = new FileReader();
            let that = this;
            myReader.onloadend = function (loadEvent: any) {
                that.onLoad.emit(loadEvent.target.result);
            };
            myReader.readAsDataURL(file);
        }
    }
}