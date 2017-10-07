import { Component, OnInit } from '@angular/core';

import  { AppService }   from '../../app.service';

import { HierarchyViewData } from '../../shared/hierarchy-view/hierarchy-view-model';



@Component({
  selector: 'c-hierarchy-view-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <button type="button" class="btn btn-primary" (click)="changeData()">更换数据</button>
              <button type="button" class="btn btn-danger" (click)="resetData()">重置数据</button>
          </div>
        </div>
      
       <c-hierarchy-view [data]="viewData" (onClicked)="nodeClicked($event)"></c-hierarchy-view>
       <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
                 <p class="c-line-title">说明</p>
                组件目录:src/app/modules/shared/hierarchy-view
            </div>
          </div>
      </div>
    </div>
  `
})
export class HierarchyViewDemoComponent {

 


  initData: HierarchyViewData = {
    total: 32,
    rows: [{
      id: '1',
      name: '中国',
      icon: 'fa-flag',
      cls: 'bg-danger text-white',
      clickEnable: true,
      children: [
        {
          id: '2',
          name: '北京',
          icon: 'fa-circle-o',
          cls: 'bg-info text-white',
          clickEnable: false
        },
        {
          id: '3',
          name: '天津',
          icon: 'fa-circle-o',
          clickEnable: true
        },
        {
          id: '4',
          name: '河北',
          icon: 'fa-circle-o',
          cls: 'bg-warning text-white'
        },
        {
          id: '5',
          name: '福建',
          icon: 'fa-circle-o',
          cls: 'bg-success text-white',
          children: [
            {
              id: '5-1',
              name: '福州',
              icon: 'fa-star-o',
              children: [
                {
                  id: '5-1-1',
                  name: '台江区',
                  icon: 'fa-circle-o'
                },
                {
                  id: '5-1-2',
                  name: '仓山区',
                  icon: 'fa-circle-o'
                },
                {
                  id: '5-1-3',
                  name: '鼓楼区',
                  icon: 'fa-circle-o',
                  children: [
                    {
                      id: '5-1-3-1',
                      name: '软件大道',
                      icon: 'fa-circle-o'
                    },
                    {
                      id: '5-1-3-2',
                      name: '铜盘路',
                      icon: 'fa-circle-o'
                    },
                    {
                      id: '5-1-3-3',
                      name: '西洪路',
                      icon: 'fa-circle-o'
                    },
                    {
                      id: '5-1-3-5',
                      name: '湖东路',
                      icon: 'fa-circle-o'
                    },
                    {
                      id: '5-1-3-6',
                      name: '其它略',
                      clickEnable: false
                    }
                  ]
                },
                {
                  id: '5-1-4',
                  name: '晋安区',
                  icon: 'fa-circle-o'
                }, {
                  id: '5-1-5',
                  name: '马尾区',
                  icon: 'fa-circle-o'
                },
                {
                  id: '5-1-6',
                  name: '其它略',
                  clickEnable: false
                }
              ]
            },
            {
              id: '5-2',
              name: '厦门',
              icon: 'fa-star-half-o'
            },
            {
              id: '5-3',
              name: '三明',
              icon: 'fa-cloud'
            },
            {
              id: '5-4',
              name: '龙岩',
              icon: 'fa-lemon-o'
            },
            {
              id: '5-5',
              name: '泉州',
              icon: 'fa-sun-o'
            },
            {
              id: '5-6',
              name: '莆田',
              icon: 'fa-snowflake-o'
            },
            {
              id: '5-7',
              name: '漳州',
              icon: 'fa-heart-o'
            },
            {
              id: '5-8',
              name: '南平',
              icon: 'fa-futbol-o'
            },
            {
              id: '5-9',
              name: '宁德',
              icon: 'fa-support'
            }
          ]
        },
        {
          id: '6',
          name: '上海',
          icon: 'fa-circle-o',
          cls: 'bg-danger text-white'
        },
        {
          id: '7',
          name: '山东',
          icon: 'fa-circle-o',
          cls: 'bg-primary text-white',
          children: [
            {
              id: '7-1',
              name: '青岛',
              icon: 'fa-circle-o-notch'
            },
            {
              id: '7-2',
              name: '莱芜',
              icon: 'fa-dot-circle-o'
            },
            {
              id: '7-3',
              name: '泰安',
              icon: 'fa-dot-circle-o'
            },
            {
              id: '7-4',
              name: '济南',
              icon: 'fa-dot-circle-o'
            },
            {
              id: '7-5',
              name: '枣庄',
              icon: 'fa-dot-circle-o'
            },
            {
              id: '7-6',
              name: '其它城市略',
              clickEnable: false
            }
          ]
        },
        {
          id: '8',
          name: '广东',
          clickEnable: false
        },
        {
          id: '9',
          name: '海南',
          clickEnable: false
        },
        {
          id: '10',
          name: '浙江',
          clickEnable: false
        },
        {
          id: '11',
          name: '其它省份略',
          clickEnable: false
        }
      ]
    }
    ]
  };

  viewData: HierarchyViewData = this.initData;


  constructor(private appService:AppService){
     this.appService.titleEventEmitter.emit("层次图");
  }

  nodeClicked(node) {
    console.info(node);
  }

  changeData() {
    this.viewData = {
      total: 3,
      rows: [{
        id: '1',
        name: '中国',
        icon: 'fa-flag',
        cls: 'bg-danger text-white',
        clickEnable: true,
        children: [
          {
            id: '2',
            name: '北京',
            icon: 'fa-circle-o',
            cls: 'bg-info text-white',
            clickEnable: false
          },
          {
            id: '3',
            name: '天津',
            icon: 'fa-circle-o',
            clickEnable: true
          }, {
            id: '8',
            name: '其它省份略',
            cls: 'bg-info text-white',
            clickEnable: false
          }
        ]
      }]
    }
  }

  resetData() {
    this.viewData = this.initData;
  }

}