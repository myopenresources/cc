import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


import  { MainData }    from '../main/main-model';
import  { ModalService } from '../shared/modal/modal.service';
import  { ConfirmConfig} from '../shared/modal/modal-model';

import  { AvatarCropperComponent} from './avatar-cropper.component';
import  { AppService }   from '../../app.service';

/**
 * 主体组件
 */
@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  //切换导航
  private toggleDescTip: string="点击关闭导航菜单";

  //切换导航标识
  private navClose:boolean=false;
  //切换用户信息卡标识
  private userCardClose:boolean=true;

  //用户数据
  private mainData: MainData = {
    userData:{
     userName: "百变小咖",
     userHeaderImg:"./assets/img/user-header.png",
     mobilePhone:"1895090***2",
     email:"332557712@qq.com",
     positions:"Java工程师、打杂工程师",
    },
    menuData: [{
      "id": "1",
      "parentId": "0",
      "name": "经典示例",
      "keyWord":"toast",
      "icon": 'fa-wrench',
      "isExpend": false,
      "children": [{
        "id": "2",
        "parentId": "1",
        "name": "消息框",
        "keyWord":"mtk",
        "icon": 'fa-columns',
        "url": '/app/toastDemo'
      }, {
        "id": "3",
        "parentId": "1",
        "name": "模态框",
        "keyWord":"modal",
        "icon": 'fa-columns',
        "url": '/app/modalDemo'
      }, {
        "id": "4",
        "parentId": "1",
        "name": "图表",
        "keyWord":"chart",
        "icon": 'fa-pie-chart',
        "url": '/app/ngxChartsDemo'
      }, {
        "id": "5",
        "parentId": "1",
        "name": "下拉",
        "keyWord":"multiselectDropdown",
        "icon": 'fa-circle',
        "url": '/app/multiselectDropdownDemo'
      }, {
        "id": "6",
        "parentId": "1",
        "name": "层次图",
        "keyWord":"hierarchyView",
        "icon": 'fa-css3',
        "url": '/app/hierarchyViewDemo'
      }, {
        "id": "7",
        "parentId": "1",
        "name": "图片裁剪",
        "keyWord":"imgCropper",
        "icon": 'fa-css3',
        "url": '/app/imgCropperDemo'
      }, {
        "id": "8",
        "parentId": "1",
        "name": "列表",
        "keyWord":"lb",
        "icon": 'fa-list',
        "url": 'list'
      }, {
        "id": "9",
        "parentId": "1",
        "name": "时间选择器",
        "keyWord":"sjxzq",
        "icon": 'fa-calendar',
        "url": 'datepicker'
      }, {
        "id": "10",
        "parentId": "1",
        "name": "开关按钮",
        "keyWord":"kgal",
        "icon": 'fa-toggle-on',
        "url": 'switch'
      }, {
        "id": "11",
        "parentId": "1",
        "name": "图表",
        "keyWord":"tb",
        "icon": 'fa-pie-chart',
        "url": 'chart'
      }, {
        "id": "12",
        "parentId": "1",
        "name": "树与下拉树",
        "keyWord":"syxls",
        "icon": 'fa-tree',
        "url": 'tree'
      }, {
        "id": "13",
        "parentId": "1",
        "name": "文件上传",
        "keyWord":"wjsc",
        "icon": 'fa-upload',
        "url": 'fileUpload'
      }, {
        "id": "14",
        "parentId": "1",
        "name": "富文本编辑器",
        "keyWord":"hwbbjq",
        "icon": 'fa-file-o',
        "url": 'editor'
      }, {
        "id": "15",
        "parentId": "1",
        "name": "下拉框",
        "keyWord":"xlk",
        "icon": 'fa-circle',
        "url": 'select'
      }]

    }, {
      "id": "16",
      "parentId": "0",
      "name": "个人中心",
      "keyWord":"whzx",
      "icon": "fa-flag",
      "children": [{
        "id": "17",
        "parentId": "16",
        "name": "待办信息",
        "keyWord":"dbxx",
        "icon": "fa-bell-o",
        "url": "task"
      }, {
        "id": "18",
        "parentId": "16",
        "name": "通知信息",
        "keyWord":"tzxx",
        "icon": "fa-bullhorn",
        "url": "task"
      }, {
        "id": "19",
        "parentId": "16",
        "name": "备忘信息",
        "keyWord":"bwxx",
        "icon": "fa-tag",
        "url": "task"
      }]
    }, {
      "id": "20",
      "parentId": "0",
      "name": "权限管理",
      "keyWord":"qxgl",
      "icon": 'fa-user',
      "isExpend": false,
      "children": [{
        "id": "21",
        "parentId": "20",
        "name": "用户管理",
        "keyWord":"yhgl",
        "icon": "fa-vcard",
        "isExpend": false,
        "children": [{
          "id": "22",
          "parentId": "21",
          "name": "用户添加",
          "keyWord":"yhtj",
          "icon": "fa-plus-circle",
          "url": "userAdd"
        }, {
          "id": "23",
          "parentId": "21",
          "name": "用户查询",
          "keyWord":"yhcx",
          "icon": "fa-search",
          "url": "userList"
        }]
      }, {
        "id": "24",
        "parentId": "20",
        "name": "角色管理",
        "keyWord":"jsgl",
        "icon": "fa-users",
        "children": [{
          "id": "25",
          "parentId": "24",
          "name": "角色添加",
          "keyWord":"jstj",
          "icon": "fa-plus-circle",
          "url": "roleAdd"
        }, {
          "id": "26",
          "parentId": "24",
          "name": "角色查询",
          "keyWord":"jscx",
          "icon": "fa-search",
          "url": "roleList"
        }, {
          "id": "27",
          "parentId": "24",
          "name": "角色分配",
          "keyWord":"jsfp",
          "icon": "fa-cogs",
          "url": "userList"
        }]
      }, {
        "id": "28",
        "parentId": "20",
        "name": "菜单管理",
        "keyWord":"cdgl",
        "icon": "fa-tree",
        "children": [{
          "id": "29",
          "parentId": "28",
          "name": "菜单添加",
          "keyWord":"cdtj",
          "icon": "fa-plus-circle",
          "url": "menuAdd"
        }, {
          "id": "30",
          "parentId": "28",
          "name": "菜单查询",
          "keyWord":"cdcx",
          "icon": "fa-search",
          "url": "menuList"
        }]
      }]
    }, {
      "id": "31",
      "parentId": "0",
      "name": "系统管理",
      "keyWord":"txgl",
      "icon": "fa-cube",
      "children": [{
        "id": "32",
        "parentId": "32",
        "name": "系统日志",
        "keyWord":"xtrz",
        "icon": "fa-file",
        "url": "systemLog"
      }]
    }]
  }

  private title:string="首页";
 


  constructor(private router: Router,private modalService: ModalService,private ngbModalService: NgbModal,private appService:AppService) {
        this.appService.titleEventEmitter.subscribe((value:string)=>{
            if(value){
               this.title=value;
            }
        })
  }


  /**
   * 初始化
   */
  ngOnInit() {
  }

  /**
    * 切换导航
   */
  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = "点击展开导航菜单";
    } else {
      this.toggleDescTip = "点击关闭导航菜单";
    }
  }

 /**
  * 跳转首页
  */
  toHome(){
     this.title="首页";
     this.router.navigate(['/app/home']);
  }

  /**
   * 头像更换
   */
  avatarReplacement(){
      this.ngbModalService.open(AvatarCropperComponent,{size:'lg',backdrop:'static',keyboard:false}).result.then((result) => {
        
      }, (reason) => {
        
      });
  }
 

  /**
   * 退出系统
   */
  exitSys(){
      let exitSysCfg=new ConfirmConfig('您确定退出系统吗？');
      this.modalService.confirm(exitSysCfg).then((result) => {
        if(result.status=="approved" ){
            this.router.navigate(['/login']);
        }
      }, (reason) => {
      });
  }


 



}


