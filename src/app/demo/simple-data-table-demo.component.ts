import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../app.service';

import {SimpleDataHttpPageComponent} from '../shared/simple-data-table/simple-data-http-page.component';


@Component({
  selector: 'c-simple-data-table-demo',
  templateUrl: './simple-data-table-demo.component.html'
})
export class SimpleDataTableDemoComponent {
  rowData: any[];
  columnDefs: any[];

  data: any[] = [
    {
      name: 'a',
      email: '1',
      age: 3
    },
    {
      name: 'b',
      email: '5',
      age: 2
    },
    {
      name: 'c',
      email: '3',
      age: 1
    }
  ]


  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

   url:string="http://127.0.0.1:8080/cjhme/user/login.jhtml";
  
    param:any = {
      name: 'admin',
      age: 16
    }
  
    pageList:Array<number>= [15, 25, 35]
  
    btnCls: string = 'btn-outline-info';


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("简单数据表格");


    this.columnDefs = [
      { headerName: "Make", field: "make", width: 300 },
      { headerName: "Model", field: "model", width: 300 },
      { headerName: "Price", field: "price", width: 300 },
      { headerName: "aaa", field: "aaa", width: 500 }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000, aaa: '789456' },
      { make: "Ford", model: "Mondeo", price: 32000, aaa: '0123456' },
      { make: "Porsche", model: "Boxter", price: 72000, aaa: '123456' }
    ]
  }


  search(){
    this.param.age=20;
    this.param.name='admin23';
    this.param.sex='男';
    this.pageList=[10, 15, 20];
    
    this.hp.search();
 }





}