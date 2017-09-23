import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
 
import {PaginationComponent} from './pagination.component';
import {HttpPaginationComponent} from './http-pagination.component';

/**
 *  分页模块
 */
@NgModule({
  imports:[
     CommonModule,
     FormsModule
  ],
  declarations: [
     PaginationComponent,
     HttpPaginationComponent
  ],
  exports:[
     PaginationComponent,
     HttpPaginationComponent
  ]
})
export class PaginationModule { }