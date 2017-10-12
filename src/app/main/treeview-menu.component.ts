import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import  { MenuData }    from '../main/main-model';
/**
 * 菜单树组件
 */
@Component({
  selector: 'c-treeview-menu',
  template: `
    <ul class="c-treeview-menu" [hidden]="!data.isExpend"  *ngIf="!isLeaf(data)">
          <li *ngFor="let item of data.children">
              <a  (click)="itemClicked(item);">
                  <i class="fa " [ngClass]="item.icon"></i> <span>{{item.name}}</span>   
                  <i style="margin-top:3px;width:17px" class="fa  pull-right"  [ngClass]="{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}"></i>
               </a>
              <c-treeview-menu [data]="item"></c-treeview-menu>
          </li>
    </ul>
  `,
  styleUrls:['./treeview-menu.component.scss']
})

export class TreeviewMenuComponent {

  @Input() data:MenuData;


  constructor(private router: Router) {}


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
       this.router.navigate([item.url]);
    }
  }





}