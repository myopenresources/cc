import {Component, Input, OnInit} from "@angular/core";
import {SimpleDataTableDirective} from "./simple-data-table.directive";
import { SortEvent,SortType } from './simple-data-table-model';

@Component({
    selector: "c-simple-data-sort",
    template: `
        <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            <span *ngIf="isSortedByAsc"  class="fa  fa-long-arrow-up" aria-hidden="true"></span>
            <span *ngIf="isSortedByDesc" class="fa  fa-long-arrow-down" aria-hidden="true"></span>
        </a>`
})
export class SimpleDataSortComponent implements OnInit {

    @Input("sortBy") sortBy: string;

    isSortedByAsc: boolean = false;
    isSortedByDesc: boolean = false;

    public constructor(private simpleDataTable: SimpleDataTableDirective) {
        
    }

    public ngOnInit(): void {
        this.simpleDataTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByAsc = (event.sortBy == this.sortBy && event.sortOrder == SortType.ASC);
            this.isSortedByDesc = (event.sortBy == this.sortBy && event.sortOrder == SortType.DESC);
        });
    }

    sort() {
        if (this.isSortedByAsc) {
            this.simpleDataTable.setSort(this.sortBy, SortType.DESC);
        } else {
            this.simpleDataTable.setSort(this.sortBy, SortType.ASC);
        }
    }
}