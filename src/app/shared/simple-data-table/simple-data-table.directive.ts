import {Directive, Input, EventEmitter, SimpleChange, OnChanges,Output} from "@angular/core";
import {ReplaySubject} from "rxjs/Rx";
import * as _ from "lodash";
import { SortEvent,SortType } from './simple-data-table-model';


@Directive({
    selector: '[c-simple-data-table]',
    exportAs: 'simpleDataTable'
})
export class SimpleDataTableDirective implements OnChanges {

    @Input("refData") 
    public refData: any[] = [];

    public data: any[];

    @Input("sortBy") public sortBy: string|string[] = "";
    @Input("sortOrder") public sortOrder = SortType.ASC;

    public onSortChange = new ReplaySubject<SortEvent>(1);
    @Output("sortByChange") public sortByChange = new EventEmitter<string|string[]>();
    @Output("sortOrderChange") public sortOrderChange = new EventEmitter<string>();
    


    public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
        if (changes["sortBy"] || changes["sortOrder"]) {
        }else if(changes["refData"]){
            this.refData = changes["refData"].currentValue || [];
            this.data=this.refData;
        }
 
    }

    public setSort(sortBy: string|string[], sortOrder: string): void {
        if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = _.includes([SortType.ASC,SortType.DESC], sortOrder) ? sortOrder : SortType.ASC;
            this.onSortChange.next({sortBy: sortBy, sortOrder: sortOrder});

            this.sortByChange.emit(this.sortBy);
            this.sortOrderChange.emit(this.sortOrder);
            this.computeData();
        }

    }

    public setData(data){
        this.refData=data;
        this.data=this.refData;
    }

    private computeData(): void {
        let data = this.refData;
        var sortBy = this.sortBy;
        if (typeof sortBy === 'string' || sortBy instanceof String) {
            data = _.orderBy(data, this.caseInsensitiveIteratee(<string>sortBy), [this.sortOrder]);
        } else {
            data = _.orderBy(data, sortBy, [this.sortOrder]);
        }
        this.data = data;
    }

    private caseInsensitiveIteratee(sortBy: string) {
        return (row: any): any => {
            var value = row;
            for (let sortByProperty of sortBy.split('.')) {
                if(value) {
                    value = value[sortByProperty];
                }
            }
            if (value && typeof value === 'string' || value instanceof String) {
                return value.toLowerCase();
            }
            return value;
        };
    }

}