import { Component, OnInit, Input } from '@angular/core';
import  { MenuData }    from '../main/main-model';

@Component({
  selector: 'treeview-menu',
  template: `
    <ul class="c-treeview-menu" [hidden]="!data.isExpend"  *ngIf="!isLeaf(data)">
          <li *ngFor="let item of data.children">
              <a  (click)="itemClicked(item);">
                  <i class="fa " [ngClass]="item.icon"></i> <span>{{item.name}}</span>   
                  <i style="margin-top:3px;width:17px" class="fa  pull-right"  [ngClass]="{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}"></i>
               </a>
              <treeview-menu [data]=item></treeview-menu>
          </li>
    </ul>
  `
})

export class TreeviewMenuComponent {

  @Input() data:Array<MenuData>;


  constructor() {}


  /**
   * 是否有子节点
   * @param item 
   */
  isLeaf(item: MenuData) {
    return !item.children || !item.children.length;
  }

  /**
   * 点击
   * @param item 
   */
  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      item.isExpend = !item.isExpend;
    } else {
      console.info(item.name);
    }
  }





}