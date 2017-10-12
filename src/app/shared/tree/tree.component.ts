import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeData } from './tree-model'


/**
 * 树
 */
@Component({
  selector: 'c-tree',
  templateUrl: './tree.component.html',
  styleUrls:['./tree.component.scss']
})
export class TreeComponent implements OnInit {


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
  @Input() animatedCls: string='';
  


  //单击事件
  @Output()
  onClick = new EventEmitter();

  //改变事件
  @Output()
  onCheckChanged = new EventEmitter();

  //所有数据
  private allData: Array<TreeData>;

  //搜索隐藏
   searchMsgHidden: boolean = true;



  /**
   * 构造方法
   */
  constructor() { }

  /**
   * 初始化
   */
  ngOnInit() {
    this.allData = this.data;
  }



  //===公共方法开始===

  /**
   * 根据状态全选
   * @param state 
   */
  checkedAll(state: boolean) {
    this.checkedAllByState(this.data, state);
  }

  /**
   * 获得数据
   */
  getData(): Array<TreeData> {
    return this.data;
  }

  /**
   * 设置数据
   * @param data 
   */
  setData(data:Array<TreeData>){
    this.data=data;
    this.allData=data;
  }

  /**
   * 获得选中的数据
   */
  getCheckedData(): Array<TreeData> {
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
   * 根据ids与状态选中节点
   */
  checkedByIds(ids: Array<string>, state: boolean = true) {
    let ckList = new Array<TreeData>();
    for (let i = 0; i < this.data.length; i++) {
      this.checkedByStateAndIds(this.data[i], ids, state, ckList);
    }

    //级联选择，需要选择ids对应的上下级节点
    if (this.cascadeChecked) {
      for (let item of ckList) {
        this.checkedChildrenNodes(item, item.id, item.isChecked);
        this.checkedParentNode(item);
      }
    }
  }

  /**
   * 查询树
   */
  searchTree(searchTxt: string = '') {
    let tempData = this.allData;
    searchTxt = searchTxt.trim();
    this.searchMsgHidden = true;
    if ('' != searchTxt) {
      let keyWord = new RegExp(searchTxt);
      let nodeList = new Array<TreeData>();
      let nodeIdList = new Array<string>();

      for (let item of tempData) {
        this.searchItem(item, nodeList, nodeIdList, keyWord);
      }
      if (nodeList.length > 0) {
        this.data = nodeList;
      } else {
        this.searchMsgHidden = false;
      }

    } else {
      this.data = this.allData;
    }
  }


  //===公共方法结束===


  /**
  * 点击
  * @param item 
  */
  private itemClicked(item: TreeData) {
    this.onClick.emit(item);
  }


  /**
  * 选择框改变
  */
  private onCheckboxChanged(item: TreeData) {
    this.onCheckChanged.emit(item);

    //如果单选
    if (this.singleChecked) {
      this.checkedAllByState(this.data, false);
      item.isChecked = true;
      //如果级联选择
    } else if (this.cascadeChecked) {
      item.isChecked = !item.isChecked;
      this.checkedChildrenNodes(item, item.id, item.isChecked);
      this.checkedParentNode(item);
    }else{
      item.isChecked = !item.isChecked;
    }
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

  /*
   *根据状态选择所有节点
   */
  private checkedAllByState(item: Array<TreeData>, state: boolean) {

    for (let i = 0; i < item.length; i++) {
      item[i].isChecked = state;
      if (item[i].children) {
        this.checkedAllByState(item[i].children, state);
      }
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
   * 根据ids与状态选中节点
   * @param item 
   * @param ids 
   * @param state 
   */
  private checkedByStateAndIds(item: TreeData, ids: Array<string>, state: boolean, ckList: Array<TreeData>) {
    let curId = '';
    let index;
    for (let i = 0; i < ids.length; i++) {
      if (item.id == ids[i]) {
        curId = item.id;
        index = i;
        break;
      }
    }

    if (curId && curId != '') {
      item.isChecked = state;
      ids.splice(index, 1);
      ckList.push(item);
    } else {
      item.isChecked = !state;
    }


    let nodes = item.children;
    if (nodes && null != nodes && undefined != nodes) {
      for (let i = 0; i < nodes.length; i++) {
        this.checkedByStateAndIds(nodes[i], ids, state, ckList);
      }
    }
  }

  /**
  * 查询子菜单
  * @param item 
  * @param nodeIdList 
  */
  private searchItem(item: TreeData, nodeList: Array<TreeData>, nodeIdList: Array<string>, keyWord: RegExp) {
    item.isExpend = false;
    //关键字匹配，并且不在列表中的
    if ((item.name.match(keyWord) || item.keyWord.match(keyWord)) && !this.checkSearchTreeIdExists(item.id, nodeIdList)) {
      nodeList.push(item);
      this.pushSearchTree(item, nodeIdList);
    }

    //存在子菜单的，递归子菜单
    let itemChildren = item.children;
    if (itemChildren && itemChildren.length > 0) {
      for (let subItem of itemChildren) {
        this.searchItem(subItem, nodeList, nodeIdList, keyWord);
      }
    }
  }


  /**
    * 添加查询的菜单
    * @param item 
    * @param nodeIdList 
    */
  private pushSearchTree(item: TreeData, nodeIdList: Array<string>) {
    nodeIdList.push(item.id);
    let itemChildren = item.children;
    if (itemChildren && itemChildren.length > 0) {
      for (let subItem of itemChildren) {
        this.pushSearchTree(subItem, nodeIdList);
      }
    }
  }

  /**
   * 
   * @param id 检查菜单id是否存在
   * @param nodeIdList 
   */
  private checkSearchTreeIdExists(id, nodeIdList: Array<string>) {
    for (let nodeId of nodeIdList) {
      if (nodeId == id) {
        return true;
      }
    }

    return false;
  }

}
