import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import  { PaginationModule}       from '../pagination/pagination.module';


import {SimpleDataTableDirective} from "./simple-data-table.directive";
import {SimpleDataSortComponent} from "./simple-data-sort.component";
import {SimpleDataHttpPageComponent} from "./simple-data-http-page.component";



@NgModule({
    imports: [
        CommonModule,
        PaginationModule
    ],
    declarations: [
        SimpleDataTableDirective,
        SimpleDataSortComponent,
        SimpleDataHttpPageComponent
    ],
    exports: [
        SimpleDataTableDirective,
        SimpleDataSortComponent,
        SimpleDataHttpPageComponent
    ]
})
export class SimpleDataTableModule {

}