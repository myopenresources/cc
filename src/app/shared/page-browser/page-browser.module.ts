import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {PageBrowserComponent} from './page-browser.component';


/**
 *  页面浏览器
 */
@NgModule({
  imports:[
     CommonModule
  ],
  declarations: [
     PageBrowserComponent
  ],
  exports:[
     PageBrowserComponent
  ]
})
export class PageBrowserModule { }