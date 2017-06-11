import { Component, OnInit } from '@angular/core';

import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';


@Component({
    selector: 'home',
    template: `
    <div class="container-fluid">
        <ss-multiselect-dropdown [options]="myOptions" [texts]="myTexts" [settings]="mySettings" [(ngModel)]="optionsModel" (ngModelChange)="onChange($event)"></ss-multiselect-dropdown>
        <div class="c-mt15">
           第三方组件文档:https://github.com/softsimon/angular-2-dropdown-multiselect
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
        containerClasses: 'col-md-6',
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

    constructor() { }

    onChange(e) {
        console.log(e);
    }


}