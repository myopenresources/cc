import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { HttpService } from '../http/http.service';
import { Utils } from '../util/utils';
import { ToastService } from '../toast/toast.service';
import { ToastConfig, ToastType } from '../toast/toast-model';

import { PaginationType, HttpPaginationMethod } from './pagination-model';



/**
 * c-http-pagination组件
 */
@Component({
    selector: 'c-http-pagination',
    template: `
       <c-pagination [total]="total" [pageList]="pageList" [btnCls]="btnCls" (onPageChanged)="onPageChanged($event)"></c-pagination>
    `
})
export class HttpPaginationComponent implements OnInit {

    @Input()
    pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls: string = 'btn-light';

    @Input()
    url: string;

    @Input()
    method: string = 'post';

    @Input()
    param: any = new Object();


    @Output()
    onDataChanged = new EventEmitter();



    total: number = 0;
    pageSize: number = this.pageList[0];
    pageNumber: number = 1;



    constructor(private httpService: HttpService, private toastService: ToastService) {

    }

    /**
    * 初始化
    */
    ngOnInit() {
        this.getServerData();
    }

    /**
     * 查询方法
     */
    search(){
        this.getServerData();
    }

    /**
     * 获得服务器数据
     */
    private getServerData() {
        let that = this;
        let serviceData: any = {};
        if (Utils.isArray(this.param)) {
            serviceData.pageNumber = this.pageNumber;
            serviceData.pageSize = this.pageSize;
            serviceData.list = this.param;
        } else if (Utils.isObject(this.param)) {
            this.param.pageNumber = this.pageNumber;
            this.param.pageSize = this.pageSize;
            serviceData = this.param;
        } else {
            serviceData.pageNumber = this.pageNumber;
            serviceData.pageSize = this.pageSize;
        }

        if (this.method == HttpPaginationMethod.GET && Utils.isNotEmpty(this.url)) {
            this.httpService.get(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                } else {
                    const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        } else if (Utils.isNotEmpty(this.url)) {
            this.httpService.post(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                } else {
                    const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        } else {
            console.error("c-http-pagination组件请求时，url参数为空！");
        }
    }


    /**
     * 服务器端数据处理
     * @param data 数据
     */
    private serverDataProcess(data: any) {
        if (data && data.total && data.rows) {
            this.total = data.total;
            this.onDataChanged.emit(data.rows);
        } else {
            console.error("c-http-pagination,返回的数据格式不正确！");
        }
    }


    /**
     * 分页改变事件
     * @param event 
     */
     onPageChanged($event) {
        if ($event.type != PaginationType.PAGE_INIT) {
            this.pageSize = $event.pageSize;
            this.pageNumber = $event.pageNumber;
            this.getServerData();
        }
    }
    

}