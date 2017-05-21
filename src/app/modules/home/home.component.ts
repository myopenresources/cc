import { Component, OnInit } from '@angular/core';
import  { TaskObjData, NoticeObjData }    from '../home/home-model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private taskObj: TaskObjData = {
    total: 50,
    taskList: [{
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

  private noticeObj: NoticeObjData = {
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

  /**
   * 初始化
   */
  ngOnInit() {

  }

}