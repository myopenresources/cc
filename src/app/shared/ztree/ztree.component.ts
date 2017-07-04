import { Component, OnInit, ViewChild, ElementRef,AfterViewInit,OnDestroy,Input } from '@angular/core';

declare var $: any;

@Component({
    selector: 'c-ztree',
    template: `
       <ul #ztree   class="ztree"></ul>
  `
})
export class ZtreeComponent implements AfterViewInit,OnDestroy {

    @ViewChild('ztree') ztree: ElementRef;

    //输入数据
    @Input() setting:any={};

    //输入数据
    @Input() zNodes:any=[];

    //实例
    private ztreeInstance:any;


    constructor() {

    }

    ngAfterViewInit() {
      this.ztreeInstance= $.fn.zTree.init($(this.ztree.nativeElement), this.setting, this.zNodes);
    }

    ngOnDestroy(){
         if (this.ztreeInstance) {
             $.fn.zTree.destroy(this.ztreeInstance);
         }
    }

    /**
     * 获得ztree实例
     */
    getZtreeInstance(){
         return this.ztreeInstance;
    }

  
}
