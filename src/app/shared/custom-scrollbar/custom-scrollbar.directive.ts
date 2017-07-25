import { Directive, Input, ElementRef, HostListener,AfterViewInit,OnDestroy} from '@angular/core';
declare var $: any;

/**
 * 滚动条
 */
@Directive({
    selector: '[c-custom-scrollbar]'
})
export class CustomScrollbarDirective implements AfterViewInit,OnDestroy{

    @Input() options: any = {
         axis: 'y',
         theme: 'minimal-dark',
         autoDraggerLength:true
    };

    private scrollbarInstance: any;

    constructor(private elementRef: ElementRef) { }


     /**
      * 视图初始化
      */
     ngAfterViewInit() {
         this.createScrollbar();
     }

     /**
     * 销毁
     */
    ngOnDestroy() {
       this.scrollbarInstance.mCustomScrollbar("destroy");
    }

     /**
     * 创建树
     */
    private createScrollbar() {
        this.scrollbarInstance=$(this.elementRef.nativeElement).mCustomScrollbar(this.options);
    }

    /**
     * 获得实例
     */
    getScrollbarInstance(){
      return this.scrollbarInstance;
    }
}