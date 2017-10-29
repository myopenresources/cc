import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { MainData } from '../main/main-model';
import { ModalService } from '../shared/modal/modal.service';
import { ConfirmConfig } from '../shared/modal/modal-model';

import { AvatarCropperComponent } from '../business-shared/user/avatar-cropper.component';
import { PasswordEditComponent } from '../business-shared/user/password-edit.component';
import { AppService } from '../app.service';

/**
 * 主体组件
 */
@Component({
  selector: 'c-main',
  templateUrl: './main.component.html',
  styleUrls: ['.//main.component.scss']
})
export class MainComponent implements OnInit {

  //切换导航
  toggleDescTip: string = "点击关闭导航菜单";

  //切换导航标识
  navClose: boolean = false;




  //用户数据
  mainData: MainData = {
    userData: {
      userName: "百变小咖",
      userAvatar: "./assets/img/user-header.png",
      mobilePhone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },
    menuData: [{
      "id": "1",
      "parentId": "0",
      "name": "组件示例",
      "keyWord": "demo",
      "icon": 'fa-wrench',
      "isExpend": false,
      "children": [{
        "id": "2",
        "parentId": "1",
        "name": "消息框",
        "keyWord": "mtk",
        "icon": 'fa-columns',
        "url": '/app/demo/toastDemo'
      }, {
        "id": "3",
        "parentId": "1",
        "name": "模态框",
        "keyWord": "modal",
        "icon": 'fa-columns',
        "url": '/app/demo/modalDemo'
      }, {
        "id": "4",
        "parentId": "1",
        "name": "图表",
        "keyWord": "chart",
        "icon": 'fa-pie-chart',
        "url": '/app/demo/ngxChartsDemo'
      }, {
        "id": "5",
        "parentId": "1",
        "name": "下拉",
        "keyWord": "selectDemo",
        "icon": 'fa-circle',
        "url": '/app/demo/selectDemo'
      }, {
        "id": "6",
        "parentId": "1",
        "name": "层次图",
        "keyWord": "hierarchyView",
        "icon": 'fa-css3',
        "url": '/app/demo/hierarchyViewDemo'
      }, {
        "id": "7",
        "parentId": "1",
        "name": "图片裁剪",
        "keyWord": "imgCropper",
        "icon": 'fa-file-picture-o',
        "url": '/app/demo/imgCropperDemo'
      }, {
        "id": "8",
        "parentId": "1",
        "name": "分页",
        "keyWord": "pagination",
        "icon": 'fa-pagelines',
        "url": '/app/demo/paginationDemo'
      }, {
        "id": "9",
        "parentId": "1",
        "name": "http分页",
        "keyWord": "httpPagination",
        "icon": 'fa-pagelines',
        "url": '/app/demo/httpPaginationDemo'
      }, {
        "id": "10",
        "parentId": "1",
        "name": "开关按钮",
        "keyWord": "switch",
        "icon": 'fa-toggle-on',
        "url": '/app/demo/switchDemo'
      }, {
        "id": "12",
        "parentId": "1",
        "name": "日期选择",
        "keyWord": "datepicker",
        "icon": 'fa-calendar',
        "url": '/app/demo/datepickerDemo'
      }, {
        "id": "13",
        "parentId": "1",
        "name": "树与下拉树",
        "keyWord": "tree",
        "icon": 'fa-tree',
        "url": '/app/demo/treeDemo'
      }, {
        "id": "13",
        "parentId": "1",
        "name": "ztree",
        "keyWord": "ztree",
        "icon": 'fa-tree',
        "url": '/app/demo/ztreeDemo'
      }, {
        "id": "15",
        "parentId": "1",
        "name": "图片转换成base64",
        "keyWord": "imgSelectToBase",
        "icon": 'fa-upload',
        "url": '/app/demo/imgSelectToBaseDemo'
      }, {
        "id": "14",
        "parentId": "1",
        "name": "文件上传",
        "keyWord": "fileUpload",
        "icon": 'fa-upload',
        "url": '/app/demo/fileUploadDemo'
      }, {
        "id": "15",
        "parentId": "1",
        "name": "模拟滚动条",
        "keyWord": "customScrollbarDemo",
        "icon": 'fa-sliders',
        "url": '/app/demo/customScrollbarDemo'
      }, {
        "id": "16",
        "parentId": "1",
        "name": "图片查看器",
        "keyWord": "imageViewerDemo",
        "icon": 'fa-image',
        "url": '/app/demo/imageViewerDemo'
      }, {
        "id": "17",
        "parentId": "1",
        "name": "旋转动画",
        "keyWord": "spinDemo",
        "icon": 'fa-spinner',
        "url": '/app/demo/spinDemo'
      }, {
        "id": "20",
        "parentId": "1",
        "name": "本地存储服务",
        "keyWord": "storageDemo",
        "icon": 'fa-database',
        "url": '/app/demo/storageDemo'
      }, {
        "id": "21",
        "parentId": "1",
        "name": "页面浏览器",
        "keyWord": "pageBrowserDemo",
        "icon": 'fa-circle-thin',
        "url": '/app/demo/pageBrowserDemo'
      }, {
        "id": "22",
        "parentId": "1",
        "name": "富文本编辑器",
        "keyWord": "editorDemo",
        "icon": 'fa-file-o',
        "url": '/app/demo/editorDemo'
      }, {
        "id": "23",
        "parentId": "1",
        "name": "ag-grid",
        "keyWord": "agGridDemo",
        "icon": 'fa-table',
        "url": '/app/demo/agGridDemo'
      }, {
        "id": "24",
        "parentId": "1",
        "name": "简单数据表格",
        "keyWord": "simpleDataTableDemo",
        "icon": 'fa-table',
        "url": '/app/demo/simpleDataTableDemo'
      }, {
        "id": "25",
        "parentId": "1",
        "name": "颜色选择器",
        "keyWord": "colorPickerDemo",
        "icon": 'fa-life-ring',
        "url": '/app/demo/colorPickerDemo'
      },
      {
        "id": "26",
        "parentId": "1",
        "name": "步骤条",
        "keyWord": "stepDemoComponent",
        "icon": 'fa-list',
        "url": '/app/demo/stepDemo'
      },
      {
        "id": "27",
        "parentId": "1",
        "name": "验证器",
        "keyWord": "validatorDemo",
        "icon": 'fa-life-ring',
        "url": '/app/demo/validatorDemo'
      },
      {
        "id": "28",
        "parentId": "1",
        "name": "二维码",
        "keyWord": "qrcodeDemo",
        "icon": 'fa-qrcode',
        "url": '/app/demo/qrcodeDemo'
      }
      ]

    },
    {
      "id": "020",
      "parentId": "0",
      "name": "样式示例",
      "keyWord": "yssl",
      "icon": 'fa-cubes',
      "isExpend": false,
      "children": [
        {
          "id": "021",
          "parentId": "020",
          "name": "ng-bootstrap样式",
          "keyWord": "ngBootstrapDemo",
          "icon": 'fa-cubes',
          "url": '/app/demo/ngBootstrapDemo'
        }, {
          "id": "022",
          "parentId": "020",
          "name": "bootstrap样式",
          "keyWord": "bootstrapDemo",
          "icon": 'fa-cubes',
          "url": '/app/demo/bootstrapDemo'
        },
        {
          "id": "023",
          "parentId": "020",
          "name": "时间轴样式",
          "keyWord": "timeline",
          "icon": 'fa-clock-o',
          "url": '/app/demo/timelineDemo'
        }
      ]
    },
    {
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
        "icon": "fa-user-circle-o",
        "isExpend": false,
        "children": [{
          "id": "22",
          "parentId": "21",
          "name": "用户添加",
          "keyWord": "yhtj",
          "icon": "fa-pencil-square-o",
          "url": "/app/user/userAdd"
        }, {
          "id": "23",
          "parentId": "21",
          "name": "用户列表",
          "keyWord": "yhlb",
          "icon": "fa-list-alt",
          "url": "/app/user/userList"
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
          "url": "/app/role/roleAdd"
        }, {
          "id": "26",
          "parentId": "24",
          "name": "角色查询",
          "keyWord": "jscx",
          "icon": "fa-search",
          "url": "/app/role/roleList"
        }, {
          "id": "27",
          "parentId": "24",
          "name": "角色分配",
          "keyWord": "jsfp",
          "icon": "fa-cogs",
          "url": "/app/role/roleDis"
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
        "parentId": "32",
        "name": "系统日志",
        "keyWord": "xtrz",
        "icon": "fa-file",
        "url": "systemLog"
      }]
    }]
  }

  title: string = "首页";


  constructor(private router: Router, private modalService: ModalService, private ngbModalService: NgbModal, private appService: AppService) {
    this.appService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
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
  toHome() {
    this.title = "首页";
    this.router.navigate(['/app/home']);
  }

  /**
   * 个人资料
   */
  userInfo() {
    this.router.navigate(['/app/user/userInfo']);
  }

  /**
   * 头像更换
   */
  avatarReplacement() {
    this.ngbModalService.open(AvatarCropperComponent, { size: 'lg', backdrop: 'static', keyboard: false }).result.then((result) => {

    }, (reason) => {

    });
  }

  /**
   * 修改密码
   */
  passwordEdit() {
    this.ngbModalService.open(PasswordEditComponent, { size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }


  /**
   * 退出系统
   */
  exitSys() {
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if (result.status == "approved") {
        this.router.navigate(['/login']);
      }
    }, (reason) => {
    });
  }





}


