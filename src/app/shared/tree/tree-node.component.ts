import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeData } from './tree-model'
/**
 * 树节点组件
 */
@Component({
  selector: 'c-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls:['./tree-node.component.scss']
})

export class TreeNodeComponent implements OnInit {

  //输入数据
  @Input() data: TreeData;

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

  


  constructor() { }

  /**
  * 初始化
  */
  ngOnInit() {
    this.initChecked(this.data);
  }

  private initChecked(item: TreeData) {
    //使用选择框
    if (this.canChecked) {
      //如果是单选(初始化都为false)
      if (this.singleChecked) {
        //匹配选择的节点
        if (this.singleCheckedNodeId == item.id) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
        }
      } else {
        //如果isChecked不存在时默认为false
        if (item.isChecked == null || item.isChecked == undefined) {
          item.isChecked = false;
        } else {
          //级联选择
          if (this.cascadeChecked) {
            this.checkedChildrenNodes(item, item.id, item.isChecked);
          }
        }
      }
    }
  }


  /**
   * 是否有子节点
   * @param item 
   */
  isLeaf(item: TreeData) {
    return !item.children || !item.children.length;
  }

  /**
   * 展开节点
   */
  nodeExpended(item: TreeData) {
    if (!this.isLeaf(item)) {
      item.isExpend = !item.isExpend;
    }
  }


  /**
   * 点击
   * @param item 
   */
  itemClicked(item: TreeData) {
    this.onClick.emit(item);
  }


  /**
   * 选择框改变
   */
  onCheckboxChanged(item: TreeData) {
    this.onCheckChanged.emit(item);
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











}