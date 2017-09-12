import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

import { PaginationType, PaginationOptions } from './pagination-model';



/**
 * 分页组件
 */
@Component({
    selector: 'c-pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {

    @Input()
    total: number = 0;

    @Input()
    pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls: string = 'btn-light';

    @Output()
    onPageChanged = new EventEmitter();

    options: PaginationOptions = {};


    constructor() { }

    /**
    * 改变
    * @param changes 
    */
    ngOnChanges(changes: SimpleChanges) {
        this.options.total = this.total;
        this.options.pageList = this.pageList;
        this.options.pageSize = this.options.pageList[0];
        this.refreshPage();
        this.pageOperation(PaginationType.PAGE_INIT);
    }



    /**
     * 刷新分页
     */
     refreshPage() {
        this.options.pageTotal = 0;
        if (Number.parseInt(this.options.total) % Number.parseInt(this.options.pageSize) == 0) {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize);
        } else {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize) + 1;
        }
        this.options.pageTotal = Number.parseInt(this.options.pageTotal);

        if (this.options.pageTotal <= 0) {
            this.options.pageNumber = 0;
        } else {
            this.options.pageNumber = 1;
        }
    }


    /**
     * 下一页
     */
    nextPage() {
        this.options.pageNumber++;
        if (this.options.pageNumber > this.options.pageTotal) {
            this.options.pageNumber = this.options.pageTotal;
        }
    }

    /**
     * 上一页
     */
    previousPage() {
        this.options.pageNumber--;
        if (this.options.pageNumber <= 0) {
            this.options.pageNumber = 1
        }
    }

    /**
     * 最后一页
     */
    lastPage() {
        this.options.pageNumber = this.options.pageTotal;
    }

    /**
     * 第一页
     */
    fristPage() {
        this.options.pageNumber = 1;
    }

    /**
     * 分页操作
     * @param type  操作类型
     */
    pageOperation(type) {
        let pageParam = {
            pageNumber: this.options.pageNumber,
            pageSize: this.options.pageSize,
            pageTotal: this.options.pageTotal,
            total: this.options.total,
            type: type
        }
        this.onPageChanged.emit(pageParam);
    }

    /**
     * 分页改变
     * @param type 操作类型 
     */
    pageChanged(type) {
        switch (type) {
            case PaginationType.NEXT_PAGE:
                this.nextPage();
                break;
            case PaginationType.LAST_PAGE:
                this.lastPage();
                break;
            case PaginationType.PREVIOUS_PAGE:
                this.previousPage();
                break;
            case PaginationType.FRIST_PAGE:
                this.fristPage();
                break;
        }
        this.pageOperation(type);
    }

    /**
     * 页数改变
     * @param $event  当前条件
     */
     pageSizeChanged($event) {
        this.options.pageSize = Number.parseInt($event);
        this.refreshPage();
        this.pageOperation(PaginationType.PAGE_SIZE_CHANGE);
    }


}