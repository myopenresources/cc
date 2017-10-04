import {Component, Input, OnInit,Output,EventEmitter,ViewChild} from "@angular/core";
import {SimpleDataTableDirective} from "./simple-data-table.directive";
import {HttpPaginationComponent} from '../pagination/http-pagination.component';

@Component({
    selector: "c-simple-data-http-page",
    template: `
     <c-http-pagination #sdhp  [url]="url" method="post" [param]="param"  [pageList]="pageList" [btnCls]="btnCls" (onDataChanged)="onDataChanged($event)"></c-http-pagination>
    `
})
export class SimpleDataHttpPageComponent {
    @ViewChild('sdhp', undefined) sdhp: HttpPaginationComponent;

    @Input()
    pageList?: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls?: string = 'btn-light';

    @Input()
    url: string;

    @Input()
    method: string = 'post';

    @Input()
    param: any = new Object();


    public constructor(private simpleDataTable: SimpleDataTableDirective) {
        
    }


    /**
     * 数据改变事件
     * @param event 
     */
    onDataChanged(rows) {
        this.simpleDataTable.setData(rows);
    }

    public search():void{
        this.sdhp.search();
    }
}