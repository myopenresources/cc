import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../app.service';
import { ZtreeComponent } from '../shared/ztree/ztree.component'


@Component({
    selector: 'c-ztree-demo',
    template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <c-ztree #ztreeInstance [setting]="setting" [zNodes]="nodes"></c-ztree> 
              <button type="button" class="btn btn-danger" (click)="getCheckedData()">获得数据</button>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
                 使用ztree进行封装，具体使用请参考：http://www.treejs.cn/v3/main.php#_zTreeInfo
             </div>
           </div>
        </div>
    </div>
  `
})
export class ZtreeDemoComponent {
    @ViewChild('ztreeInstance') ztreeInstance: ZtreeComponent;

    setting: any = {
        check: {
            enable: true
        },
        view: {
            showLine: true,
            showIcon:false
        },
        callback: {
            onClick: function (event, treeId, treeNode, clickFlag) {
                console.info(treeNode);
            },
            onCheck: function (e, treeId, treeNode) {
                console.info(treeNode);
            }
        }
    }


    nodes: any = [
        {
            id:"1",
            name: "父节点1", children: [
                {id:"2", name: "子节点1" },
                {id:"3", name: "子节点2" }
            ]
        }
    ];

    constructor(private appService: AppService) {
        this.appService.titleEventEmitter.emit("ztree");
    }


    getCheckedData(){
        //通过ZtreeComponent抛出来的getZtreeInstance()方法访问ztree函数
        console.info(this.ztreeInstance.getZtreeInstance().getCheckedNodes(true));
    }


}
