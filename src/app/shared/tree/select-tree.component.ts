import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TreeData } from './tree-model';
import { TreeComponent } from './tree.component';
/**
 * 下拉树组件
 */
@Component({
    selector: 'c-seelct-tree',
    templateUrl: './select-tree.component.html',
    styleUrls:['./select-tree.component.scss']
})

export class SelectTreeComponent implements OnInit {

    @ViewChild('selectTree') selectTree: TreeComponent;

    //输入数据
    @Input() data: Array<TreeData>;

    //使用选择框
    @Input() canChecked: boolean = false;

    //是否单选
    @Input() singleChecked: boolean = false;

    //是否级联选择
    @Input() cascadeChecked: boolean = false;

    //隐藏父选择框
    @Input() hideParentCheckBox: boolean = false;

    //单选，根据id节点选择节点
    @Input() singleCheckedNodeId: string;

    //动画样式
    @Input() animatedCls: string = '';

    //方向
    @Input() direction: string = 'dropdown';

    //placeholder
    @Input() placeholder: string = '请选择...';

    //是否开启搜索
    @Input() enableSearch: boolean=true;


    //单击事件
    @Output()
    onClick = new EventEmitter();

    //改变事件
    @Output()
    onCheckChanged = new EventEmitter();

    //确认事件
    @Output()
    onApprove = new EventEmitter();

    //是否关闭
    isCollapsed: boolean = true;

    names: string = '';

    searchTxt: string='';

    constructor() { }

    /**
    * 初始化
    */
    ngOnInit() {
        this.initChecked();
    }


    /**
   * 获得数据
   */
    getData(): Array<TreeData> {
        return this.selectTree.getData();
    }

    /**
   * 获得选中的数据
   */
    getCheckedData(): Array<TreeData> {
        return this.selectTree.getCheckedData();
    }


    /**
    * 根据ids与状态选中节点
    */
    checkedByIds(ids: Array<string>, state: boolean = true) {
        this.selectTree.checkedByIds(ids, state);
        this.initChecked();
    }

    /**
   * 根据状态全选
   * @param state 
   */
    checkedAll(state: boolean) {
        this.selectTree.checkedAll(state);
        if (state) {
            this.initChecked();
        } else {
            this.names = '';
        }
    }

    /**
   * 设置数据
   * @param data 
   */
    setData(data: Array<TreeData>) {
       //this.selectTree.setData(data);
       this.data=data;
       this.initChecked();
    }

    /**
     * 查询树
     */
    searchTree(){
        this.selectTree.searchTree(this.searchTxt);
    }



    /**
     * 点击
     * @param item 
     */
    itemClicked(item: TreeData) {
        if (!this.canChecked) {
            this.isCollapsed = true;
            this.names = item.name;
        }
        this.onClick.emit(item);
    }

    /**
     * 改变
     * @param item 
     */
    onCheckboxChanged(item: TreeData) {
        this.onCheckChanged.emit(item);
    }

    /**
     * 同意
     * @param item 
     */
    approve() {
        this.isCollapsed = true;
        this.names = this.setNames().join(",");
        this.onApprove.emit(this.selectTree.getCheckedData());
    }

    //设置值
    private setNames(): Array<string> {
        let names = new Array<string>();
        for (let item of this.selectTree.getCheckedData()) {
            if (item.isChecked) {
                names.push(item.name);
            }
        }
        return names;
    }

    private initChecked() {
        let treeData = this.data;
        //级联选择，需要选择ids对应的上下级节点
        if (this.cascadeChecked && this.canChecked) {
            for (let item of treeData) {
                this.checkedChildrenNodes(item, item.id, item.isChecked);
                this.checkedParentNode(item);
            }

            let ckList = this.getChecked();
            let names = new Array<string>();
            for (let item of ckList) {
                if (item.isChecked) {
                    names.push(item.name);
                }
            }
            this.names = names.join(",");
        } else {
            let ckList = this.getChecked();
            let names = new Array<string>();
            for (let item of ckList) {
                if (item.isChecked) {
                    names.push(item.name);
                }
            }
            this.names = names.join(",");
        }
    }

    /**
  * 选中所有子节点
  */
    private checkedChildrenNodes(item: TreeData, id: string, checkedState: boolean) {

        let items = item.children;
        if (items && null != items && undefined != items) {
            for (let i = 0; i < items.length; i++) {

                if (items[i].parentId == id) {
                    items[i].isChecked = checkedState;
                }

                if (items[i].children) {
                    this.checkedChildrenNodes(items[i], items[i].id, checkedState);
                }
            }
        }
    }

    /**
     * 选择父节点
     * @param item 
     */
    private checkedParentNode(item: TreeData) {
        let nodeList = new Array<TreeData>();
        //查询到当前节点的父节点
        for (let i = 0; i < this.data.length; i++) {
            this.searchParentNode(this.data[i], item.parentId, nodeList);
        }

        if (nodeList && nodeList.length > 0) {
            let parentNode = nodeList[0];
            let checkedCount = 0;
            for (let j = 0; j < parentNode.children.length; j++) {
                if (parentNode.children[j].isChecked) {
                    checkedCount += 1;
                }
            }

            //子节点选择的数量与父节点一样时，父节点选中，不一样时父节点取消选中
            if (parentNode.children.length == checkedCount) {
                parentNode.isChecked = true;
            } else {
                parentNode.isChecked = false;
            }

            //选择自己的父节点
            this.checkedParentNode(parentNode);
        }
    }

    /**
  * 查询父节点
  * @param item 
  * @param parentId 
  * @param nodeList 
  */
    private searchParentNode(item: TreeData, parentId: string, nodeList: Array<TreeData>) { //查找父节点
        if (item.id == parentId) {
            nodeList.push(item);
            return;
        }

        let nodes = item.children;
        if (nodes && null != nodes && undefined != nodes) {
            for (let i = 0; i < nodes.length; i++) {
                this.searchParentNode(nodes[i], parentId, nodeList);
            }
        }
    }

    /**
  * 获得选中的数据
  */
    private getChecked(): Array<TreeData> {
        let ckList = new Array<TreeData>();
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].isChecked) {
                ckList.push(this.data[i]);
            }
            this.getCheckedItem(this.data[i], ckList);
        }
        return ckList;
    }

    /**
    * 获得选中的数据
    * @param item 
    * @param ckList 
    */
    private getCheckedItem(item: TreeData, ckList: Array<TreeData>) {
        let nodes = item.children;
        if (nodes && null != nodes && undefined != nodes) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].isChecked) {
                    ckList.push(nodes[i]);
                }

                if (nodes[i].children) {
                    this.getCheckedItem(nodes[i], ckList);
                }
            }
        }
    }



}