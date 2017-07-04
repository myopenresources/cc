import { Component, OnInit, ViewChild, ElementRef,AfterViewInit,OnDestroy,Input} from '@angular/core';
import {ZtreeComponent} from './ztree.component';
declare var $: any;
@Component({
    selector: 'c-select-ztree',
    templateUrl: './select-ztree.component.html'
})
export class SelectZtreeComponent implements AfterViewInit,OnDestroy,OnInit{

    @ViewChild('selectZtree') selectZtree: ZtreeComponent;

    //配置
    @Input() setting:any={};

    //输入数据
    @Input() zNodes:any=[];

    //方向
    @Input() direction: string = 'dropdown';

    //是否关闭
    isCollapsed: boolean = true;

    canChecked:boolean;

    //名称
    names:string;

    //placeholder
    @Input() placeholder: string = '请选择...';

    

    constructor() {

    }

    ngOnInit() {
        if(this.setting && this.setting.check && this.setting.check.enable){
            this.canChecked=true;
        }else{
            this.canChecked=false;
        }

        //当参数中setting中配置了onClick事件
        if(this.setting && this.setting.callback && this.setting.callback.onClick){
            let oldClick= this.setting.callback.onClick;
            let that = this;
            this.setting.callback.onClick=function(event, treeId, treeNode, clickFlag){
               that.isCollapsed=true;
               that.names=treeNode.name;
               oldClick(event, treeId, treeNode, clickFlag);
            }
        }else{
            let that = this;
            this.setting.callback.onClick=function(event, treeId, treeNode, clickFlag){
                that.isCollapsed=true;
                that.names=treeNode.name;
            }
        }
    }

    ngAfterViewInit() {
       
    }

    ngOnDestroy(){
         
    }

    /**
     * 树初始化
     */
    private treeViewInit(){
        if(this.canChecked){
           this.setCheckedNames();
        }else{
           let ckList=this.selectZtree.getZtreeInstance().getCheckedNodes(true)
           if(ckList && ckList.length>0){
                this.names=ckList[ckList.length-1].name;
           }else{
               this.names='';
           }
        }
    }

    /**
     * 确定
     */
    private approve(){
        this.setCheckedNames();
        this.isCollapsed=true;
    }

    //设置选中的值
    private setCheckedNames() {
        let nameArray = new Array<string>();
        for (let node of this.selectZtree.getZtreeInstance().getCheckedNodes(true)) {
                nameArray.push(node.name);
        }
        this.names=nameArray.join(",");
    }

    
    



  
}
