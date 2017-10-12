import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import  { ModalService } from '../../shared/modal/modal.service';
import { TodoObjData, NeedReadObjData, NoticeObjData, CommonFuncData } from '../home/home-model';

import  { PasswordEditComponent} from '../../business-shared/user/password-edit.component';


@Component({
  selector: 'c-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userTipClose:boolean=false;
  isTodoCollapsed:boolean=false;
  isNoticeCollapsed:boolean=false;
  isNeedReadCollapsed:boolean=false;
  isCommonFuncCollapsed:boolean=false;


  todoObj: TodoObjData = {
    total: 50,
    todoList: [{
      id: 1,
      title: '“张三”的采购订单审批',
      submitUser: '张三',
      createDate: '2016-07-23'
    }, {
      id: 2,
      title: '“李四”创建了框架合同，等待“百变小咖的审批”',
      submitUser: '李四',
      createDate: '2016-07-23'
    }, {
      id: 3,
      title: '“王五”提交了一个财务合算，等待“百变小咖的审批”',
      submitUser: '王五',
      createDate: '2016-07-23'
    }, {
      id: 4,
      title: '“赵六”有一条出库申请信息，等待“百变小咖的审批”',
      submitUser: '赵六',
      createDate: '2016-07-23'
    }, {
      id: 5,
      title: '“马七”将“2016-07-22食品采购订单验收”委托给“百变小咖”',
      submitUser: '马七',
      createDate: '2016-07-23'
    }]
  }

  needReadObj: NeedReadObjData = {
    total: 50,
    needReadList: [{
      id: 1,
      title: '采购订单，等待“百变小咖的查看',
      type: '待阅',
      createDate: '2016-07-25'
    }, {
      id: 2,
      title: '框架合同，等待“百变小咖的查看”',
      type: '订阅',
      createDate: '2016-07-23'
    }, {
      id: 3,
      title: '“财务合算，等待“百变小咖的查看”',
      type: '待阅',
      createDate: '2016-07-22'
    }, {
      id: 4,
      title: '“出库申请信息，等待“百变小咖的查看”',
      type: '订阅',
      createDate: '2016-07-21'
    }, {
      id: 5,
      title: '“2016-07-22食品采购订单验收，等待“百变小咖的查看',
      type: '待阅',
      createDate: '2016-07-20'
    }]
  }

  noticeObj: NoticeObjData = {
    total: 60,
    noticeList: [{
      id: 1,
      title: '今晚系统有重大升级，请妥善安排你的业务操作！',
      createDate: '2016-07-23'
    }, {
      id: 2,
      title: '公司20周年庆，请各位今晚参加活动！',
      createDate: '2016-07-23'
    }, {
      id: 3,
      title: '五一放假时间以及值班人员安排！',
      createDate: '2016-05-01'
    }, {
      id: 4,
      title: '关于学习公司企业文化活动！',
      createDate: '2016-03-23'
    }, {
      id: 5,
      title: '系统第一版正式上线通知！',
      createDate: '2016-03-15'
    }]
  }

  commonFuncLit: CommonFuncData[][] = [
    [{
      "id": "2",
      "name": "模态框",
      "icon": 'fa-columns',
      "url": 'modal'
    }, {
      "id": "3",
      "name": "分页",
      "icon": 'fa-pagelines',
      "url": 'pagination'
    }, {
      "id": "4",
      "name": "数据分页器",
      "icon": 'fa-table',
      "url": 'dataPager'
    }, {
      "id": "5",
      "name": "数据表格",
      "icon": 'fa-table',
      "url": 'dataTable'
    }], [{
      "id": "6",
      "name": "bootstrap样式",
      "icon": 'fa-css3',
      "url": 'bootstrapCss'
    }, {
      "id": "7",
      "name": "自定义样式",
      "icon": 'fa-css3',
      "url": 'customCss'
    }, {
      "id": "8",
      "name": "列表",
      "icon": 'fa-list',
      "url": 'list'
    }, {
      "id": "9",
      "name": "时间选择器",
      "icon": 'fa-calendar',
      "url": 'datepicker'
    }], [{
      "id": "10",
      "name": "开关按钮",
      "icon": 'fa-toggle-on',
      "url": 'switch'
    }, {
      "id": "11",
      "name": "图表",
      "icon": 'fa-pie-chart',
      "url": 'chart'
    }, {
      "id": "12",
      "name": "树与下拉树",
      "icon": 'fa-tree',
      "url": 'tree'
    }, {
      "id": "13",
      "name": "文件上传",
      "icon": 'fa-upload',
      "url": 'fileUpload'
    }], [{
      "id": "14",
      "name": "富文本编辑器",
      "icon": 'fa-file-o',
      "url": 'editor'
    }, {
      "id": "15",
      "name": "下拉框",
      "icon": 'fa-circle',
      "url": 'select'
    }, {
      "id": "23",
      "name": "用户查询",
      "icon": "fa-search",
      "url": "userList"
    }, {
      "id": "22",
      "name": "用户添加",
      "icon": "fa-plus-circle",
      "url": "userAdd"
    }], [{
      "id": "17",
      "name": "待办信息",
      "icon": "fa-bell-o",
      "url": "task"
    }, {
      "id": "18",
      "name": "通知信息",
      "icon": "fa-bullhorn",
      "url": "task"
    }, {
      "id": "19",
      "name": "备忘信息",
      "icon": "fa-tag",
      "url": "task"
    }, {
      "id": "25",
      "name": "角色添加",
      "icon": "fa-plus-circle",
      "url": "roleAdd"
    }], [{
      "id": "32",
      "name": "系统日志",
      "icon": "fa-file",
      "url": "systemLog"
    }, {
      "id": "29",
      "name": "菜单添加",
      "icon": "fa-plus-circle",
      "url": "menuAdd"
    }, {
      "id": "26",
      "name": "角色查询",
      "icon": "fa-search",
      "url": "roleList"
    }, {
      "id": "27",
      "name": "角色分配",
      "icon": "fa-cogs",
      "url": "userList"
    }]
  ]

  commonFuncConfigTip: string = "配置常用功能";

  /**
   * 初始化
   */
  ngOnInit() {

  }

  constructor(private modalService: ModalService,private ngbModalService: NgbModal){}


  /**
   * 修改密码
   */
  passwordEdit(){
      this.ngbModalService.open(PasswordEditComponent,{size:'lg'}).result.then((result) => {
        
      }, (reason) => {
        
      });
  }




}