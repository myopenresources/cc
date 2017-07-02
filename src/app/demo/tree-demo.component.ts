import { Component, OnInit, ViewChild } from '@angular/core';

import { AppService } from '../app.service';

import { TreeData } from '../shared/tree/tree-model';
import { TreeComponent } from '../shared/tree/tree.component'


@Component({
  selector: 'c-tree-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <c-tree #t [data]="data" [canChecked]="true" [singleChecked]="false" [cascadeChecked]="false" [hideParentCheckBox]="false" [singleCheckedNodeId]="singleCheckedNodeId"  [animatedCls]="'animated fadeIn'" (onClick)="onClick($event);" (onCheckChanged)="onCheckChanged($event)"></c-tree>
               <button type="button" class="btn btn-danger" (click)="checkedByIds()">选中数据</button>
               <button type="button" class="btn btn-danger" (click)="getCheckedData()">获得选中的数据</button>
               <button type="button" class="btn btn-danger" (click)="getData()">获得数据</button>
               <button type="button" class="btn btn-danger" (click)="setData()">设置数据</button>
               <button type="button" class="btn btn-danger" (click)="checkedAll()">全选</button>
               <div class="input-group">
                    <input type="text" class="form-control" placeholder="搜索..." [(ngModel)]="searchTxt">
                    <span class="input-group-btn">
                      <button class="btn btn-info c-not-shadow" type="button"  (click)="searchTree();">
                          <i class="fa  fa-search fa-fw"></i>
                        </button>
                    </span>
              </div>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
              组件目录:src/app/modules/shared/toast
             </div>
           </div>
        </div>
    </div>
  `
})
export class TreeDemoComponent {


  @ViewChild('t') t: TreeComponent;

  singleCheckedNodeId: string = '2';

  data: Array<TreeData> = [{
    "id": "1",
    "parentId": "0",
    "name": "经典示例",
    "keyWord": "toast",
    "icon": 'fa-wrench',
    "isExpend": false,
    "isChecked": true,
    "children": [{
      "id": "2",
      "parentId": "1",
      "name": "消息框",
      "keyWord": "mtk",
      "icon": 'fa-columns',
      "isChecked": true,
      "url": '/app/toastDemo'
    }, {
      "id": "3",
      "parentId": "1",
      "name": "模态框",
      "keyWord": "modal",
      "icon": 'fa-columns',
      "isChecked": false,
      "url": '/app/modalDemo'
    }, {
      "id": "4",
      "parentId": "1",
      "name": "图表",
      "keyWord": "chart",
      "icon": 'fa-pie-chart',
      "url": '/app/ngxChartsDemo'
    }, {
      "id": "5",
      "parentId": "1",
      "name": "下拉",
      "keyWord": "selectDemo",
      "icon": 'fa-circle',
      "url": '/app/selectDemo'
    }, {
      "id": "6",
      "parentId": "1",
      "name": "层次图",
      "keyWord": "hierarchyView",
      "icon": 'fa-css3',
      "url": '/app/hierarchyViewDemo'
    }, {
      "id": "7",
      "parentId": "1",
      "name": "图片裁剪",
      "keyWord": "imgCropper",
      "icon": 'fa-file-picture-o',
      "url": '/app/imgCropperDemo'
    }, {
      "id": "8",
      "parentId": "1",
      "name": "分页",
      "keyWord": "pagination",
      "icon": 'fa-pagelines',
      "url": '/app/paginationDemo'
    }, {
      "id": "9",
      "parentId": "1",
      "name": "http分页",
      "keyWord": "httpPagination",
      "icon": 'fa-pagelines',
      "url": '/app/httpPaginationDemo'
    }, {
      "id": "10",
      "parentId": "1",
      "name": "开关按钮",
      "keyWord": "uiSwitch",
      "icon": 'fa-toggle-on',
      "url": '/app/uiSwitchDemo'
    }, {
      "id": "11",
      "parentId": "1",
      "name": "时间轴样式",
      "keyWord": "timeline",
      "icon": 'fa-clock-o',
      "url": '/app/timelineDemo'
    }, {
      "id": "12",
      "parentId": "1",
      "name": "日期选择",
      "keyWord": "datepicker",
      "icon": 'fa-calendar',
      "url": '/app/datepickerDemo'
    }, {
      "id": "13",
      "parentId": "1",
      "name": "树",
      "keyWord": "tree",
      "icon": 'fa-upload',
      "url": '/app/treeDemo'
    }, {
      "id": "14",
      "parentId": "1",
      "name": "富文本编辑器",
      "keyWord": "hwbbjq",
      "icon": 'fa-file-o',
      "url": 'editor'
    }, {
      "id": "15",
      "parentId": "1",
      "name": "下拉框",
      "keyWord": "xlk",
      "icon": 'fa-circle',
      "url": 'select'
    }]

  }, {
    "id": "16",
    "parentId": "0",
    "name": "个人中心",
    "keyWord": "whzx",
    "icon": "fa-flag",
    "children": [{
      "id": "17",
      "parentId": "16",
      "name": "待办信息",
      "keyWord": "dbxx",
      "icon": "fa-bell-o",
      "url": "task"
    }, {
      "id": "18",
      "parentId": "16",
      "name": "通知信息",
      "keyWord": "tzxx",
      "icon": "fa-bullhorn",
      "url": "task"
    }, {
      "id": "19",
      "parentId": "16",
      "name": "备忘信息",
      "keyWord": "bwxx",
      "icon": "fa-tag",
      "url": "task"
    }]
  }, {
    "id": "20",
    "parentId": "0",
    "name": "权限管理",
    "keyWord": "qxgl",
    "icon": 'fa-user',
    "isExpend": false,
    "children": [{
      "id": "21",
      "parentId": "20",
      "name": "用户管理",
      "keyWord": "yhgl",
      "icon": "fa-vcard",
      "isExpend": false,
      "children": [{
        "id": "22",
        "parentId": "21",
        "name": "用户添加",
        "keyWord": "yhtj",
        "icon": "fa-plus-circle",
        "url": "userAdd"
      }, {
        "id": "23",
        "parentId": "21",
        "name": "用户查询",
        "keyWord": "yhcx",
        "icon": "fa-search",
        "url": "userList"
      }]
    }, {
      "id": "24",
      "parentId": "20",
      "name": "角色管理",
      "keyWord": "jsgl",
      "icon": "fa-users",
      "children": [{
        "id": "25",
        "parentId": "24",
        "name": "角色添加",
        "keyWord": "jstj",
        "icon": "fa-plus-circle",
        "url": "roleAdd"
      }, {
        "id": "26",
        "parentId": "24",
        "name": "角色查询",
        "keyWord": "jscx",
        "icon": "fa-search",
        "url": "roleList"
      }, {
        "id": "27",
        "parentId": "24",
        "name": "角色分配",
        "keyWord": "jsfp",
        "icon": "fa-cogs",
        "url": "userList"
      }]
    }, {
      "id": "28",
      "parentId": "20",
      "name": "菜单管理",
      "keyWord": "cdgl",
      "icon": "fa-tree",
      "children": [{
        "id": "29",
        "parentId": "28",
        "name": "菜单添加",
        "keyWord": "cdtj",
        "icon": "fa-plus-circle",
        "url": "menuAdd"
      }, {
        "id": "30",
        "parentId": "28",
        "name": "菜单查询",
        "keyWord": "cdcx",
        "icon": "fa-search",
        "url": "menuList"
      }]
    }]
  }, {
    "id": "31",
    "parentId": "0",
    "name": "系统管理",
    "keyWord": "txgl",
    "icon": "fa-cube",
    "children": [{
      "id": "32",
      "parentId": "31",
      "name": "系统日志",
      "keyWord": "xtrz",
      "icon": "fa-file",
      "url": "systemLog"
    }]
  }]

  searchTxt: string;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("树");
  }


  getData() {
    console.info(this.t.getData());
  }

  checkedByIds() {
    this.t.checkedByIds(["20", "32"]);
  }

  getCheckedData() {
    console.info(this.t.getCheckedData());
  }

  state = false;
  checkedAll() {
    this.state = !this.state;
    this.t.checkedAll(this.state);
  }

  onClick(item) {
    console.info(item);
  }

  onCheckChanged(item) {
    console.info(item);
  }

  searchTree() {
    this.t.searchTree(this.searchTxt);
  }

  setData() {
    let treeData = [{
      "id": "1",
      "parentId": "0",
      "name": "经典示例",
      "keyWord": "toast",
      "icon": 'fa-wrench',
      "isExpend": false,
      "isChecked": true,
      "children": [{
        "id": "2",
        "parentId": "1",
        "name": "消息框",
        "keyWord": "mtk",
        "icon": 'fa-columns',
        "isChecked": true,
        "url": '/app/toastDemo'
      }]
    }]

    this.t.setData(treeData);
  }



}