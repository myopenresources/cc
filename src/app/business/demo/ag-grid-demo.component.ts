import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';

import {SimpleDataHttpPageComponent} from '../../shared/simple-data-table/simple-data-http-page.component';


@Component({
  selector: 'c-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html'
})
export class AgGridDemoComponent {
  rowData: any[];
  columnDefs: any[];

 


 


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("ag-grid示例");


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


  





}