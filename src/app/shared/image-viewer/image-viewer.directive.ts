import { Directive, Input,Output,EventEmitter, ElementRef, HostListener,OnInit, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any;

/**
 * 图片查看器
 */
@Directive({
    selector: '[c-image-viewer]',
    exportAs: 'viewer'
})
export class ImageViewerDirective  implements AfterViewInit,OnDestroy{
    
    //配置
    @Input() options: any = {};

    @Output()
    onViewInit = new EventEmitter();

    private imageViewerInstance: any;

    constructor(private elementRef: ElementRef) { }
    
    ngAfterViewInit() {
         this.createImageViewer();
    }

    private createImageViewer(){
         this.imageViewerInstance=$(this.elementRef.nativeElement).viewer(this.options);
         this.onViewInit.emit(this.imageViewerInstance);
    }



     /**
     * 销毁
     */
    ngOnDestroy() {
       this.imageViewerInstance.viewer("destroy");
    }


}