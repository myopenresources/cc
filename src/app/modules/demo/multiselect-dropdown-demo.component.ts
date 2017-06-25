import { Component, OnInit } from '@angular/core';

import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

import  { AppService }   from '../../app.service';


@Component({
    selector: 'c-multiselect-dropdown-demo',
    template: `
   <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <ss-multiselect-dropdown [options]="myOptions" [texts]="myTexts" [settings]="mySettings" [(ngModel)]="optionsModel" (ngModelChange)="onChange($event)"></ss-multiselect-dropdown>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
           <div class="c-mt15">
             <p class="c-line-title">说明</p>
             第三方组件文档:https://github.com/softsimon/angular-2-dropdown-multiselect
            </div>
           </div>
        </div>
    </div>
  `
})
export class MultiSelectDemoComponent {

    // Default selection
    optionsModel: number[] = [1, 2];

    // Settings configuration
    mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    };

    // Text configuration
    myTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };

    // Labels / Parents
    myOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Car brands', isLabel: true },
        { id: 2, name: 'Volvo', parentId: 1 },
        { id: 3, name: 'Honda', parentId: 1 },
        { id: 4, name: 'BMW', parentId: 1 },
        { id: 5, name: 'Colors', isLabel: true },
        { id: 6, name: 'Blue', parentId: 5 },
        { id: 7, name: 'Red', parentId: 5 },
        { id: 8, name: 'White', parentId: 5 }
    ];

    constructor(private appService:AppService) {
        this.appService.titleEventEmitter.emit("下拉");
    }

    onChange(e) {
        console.log(e);
    }


}