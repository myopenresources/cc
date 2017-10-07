import { Component, OnInit, ViewChild } from '@angular/core';

import { AppService } from '../../app.service';
import { ZtreeComponent } from '../../shared/ztree/ztree.component'


@Component({
    selector: 'c-ztree-demo',
    template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
               <div class="row c-mt15">
                    <div  class="col-md-6">
                         <c-ztree #ztreeInstance [setting]="setting" [zNodes]="nodes"></c-ztree> 
                    </div>
               </div>
               <div class="row c-mt15">
                    <div  class="col-md-6">
                          <button type="button" class="btn btn-danger" (click)="getCheckedData()">获得数据</button>
                    </div>
               </div>
               <div class="row c-mt15">
                    <div  class="col-md-6">
                         <c-select-ztree  [setting]="setting2" [zNodes]="nodes2" (onApprove)="onApprove($event)"></c-select-ztree> 
                    </div>
               </div>
               <div class="row c-mt15">
                    <div  class="col-md-6">
                          <c-select-ztree  [setting]="setting3" [zNodes]="nodes3"></c-select-ztree> 
                    </div>
               </div>  
               <div class="row c-mt15">
                    <div  class="col-md-6">
                          <c-select-ztree  [setting]="setting4" [enableSearch]="false"></c-select-ztree> 
                    </div>
               </div>  
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
            showIcon: false
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

    setting2: any = {
        check: {
            enable: true
        },
        view: {
            showLine: true,
            showIcon: false
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
            id: "1",
            name: "父节点1", children: [
                { id: "2", name: "子节点1" },
                { id: "3", name: "子节点2" }
            ]
        }
    ];

    nodes2: any = [
        {
            id: "1",
            checked: true,
            name: "父节点1", children: [
                { id: "2", name: "子节点1", checked: true },
                { id: "3", name: "子节点2",keyWord:'子节点2'  },
                { id: "4", name: "子节点3" },
                { id: "5", name: "子节点4" },
                { id: "6", name: "子节点5" },
                { id: "7", name: "子节点6" },
                { id: "8", name: "子节点7" },
                { id: "9", name: "子节点8",keyWord:'zjd8'  },
                { id: "10", name: "子节点9" },
                { id: "11", name: "子节点10",keyWord:'zjd10' }
            ]
        }
    ];

    setting3: any = {
        check: {
            enable: false
        },
        view: {
            showLine: true,
            showIcon: false
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

    nodes3: any = [
        {
            id: "1",
            name: "父节点1", children: [
                { id: "2", name: "子节点1" },
                { id: "3", name: "子节点2", selected: true }
            ]
        }
    ];

    setting4: any = {
        check: {
            enable: false
        },
        view: {
            showLine: true,
            showIcon: false
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

    constructor(private appService: AppService) {
        this.appService.titleEventEmitter.emit("ztree");
    }


    getCheckedData() {
        //通过ZtreeComponent抛出来的getZtreeInstance()方法访问ztree函数
        console.info(this.ztreeInstance.getTreeInstance().getCheckedNodes(true));
    }


    onApprove(nodes){
        console.info(nodes);
    }


}
