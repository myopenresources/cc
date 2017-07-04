import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Utils } from '../util/utils';

declare var $: any;

@Component({
    selector: 'c-ztree',
    template: `
       <div #ztree></div>
  `
})
export class ZtreeComponent implements AfterViewInit, OnDestroy, OnInit {

    @ViewChild('ztree') ztree: ElementRef;

    //配置
    @Input() setting: any = {};

    //输入数据
    @Input() zNodes: any = [];

    //实例
    private ztreeInstance: any;

    @Output()
    onViewInit = new EventEmitter();


    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        let result = this.createTree();
        if (result) {
            setTimeout(() => {
                this.onViewInit.emit();
            }, 6)
        }


    }

    /**
     * 销毁
     */
    ngOnDestroy() {
        this.destroyTree();
    }

    /**
     * 创建树
     */
    private createTree() {
        //防止一个页面中多个id冲突
        let ztreeId = "ztree" + Utils.shortUUID();
        let ztreeUL = document.createElement('ul');
        ztreeUL.id = ztreeId;
        ztreeUL.className = "ztree";
        this.ztree.nativeElement.appendChild(ztreeUL);
        this.ztreeInstance = $.fn.zTree.init($('#' + ztreeId), this.setting, this.zNodes);
        return true;
    }

    /**
     * 获得ztree实例
     */
    getZtreeInstance() {
        return this.ztreeInstance;
    }

    //销毁树
    destroyTree() {
        if (this.ztreeInstance) {
            $.fn.zTree.destroy(this.ztreeInstance);
        }
    }


}
