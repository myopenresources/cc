import { Component, OnInit, Input } from '@angular/core';
import  { MenuData }    from '../main/main-model';

/**
 * 左侧菜单组件
 */
@Component({
  selector: 'c-sidebar-menu',
  template: `
  <div class="c-nav-search">
      <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索菜单..."  (input)="inputSearchTxt($event);">
            <span class="input-group-btn">
               <button class="btn btn-info c-not-shadow" type="button"  (click)="searchMenu();">
                   <i class="fa  fa-search fa-fw"></i>
                </button>
            </span>
       </div>
  </div>
  <div class="c-nav" c-custom-scrollbar>
    <span  class="c-search-msg" [hidden]="searchMsgHidden">搜索的菜单不存在...</span>
    <ul  class="c-sidebar-menu" [hidden]="!searchMsgHidden">
        <li  *ngFor="let item of data">
            <a  (click)="itemClicked(item);">
              <i style="margin-top:3px;width:17px" class="fa  pull-right"  [ngClass]="{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}"></i>
              <i class="fa " [ngClass]="item.icon"></i> <span>{{item.name}}</span>
              </a>
            <c-treeview-menu [data]="item"></c-treeview-menu>
        </li>
    </ul>
  </div>
  `,
  styleUrls:['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent implements OnInit {

  //输入数据
  @Input() data:Array<MenuData>;

  //所有数据
  private  allData:Array<MenuData>;

  //搜索文本
  searchTxt:string='';

  //搜索隐藏
  searchMsgHidden:boolean=true;

  /**
   * 构造方法
   */
  constructor() {}

  /**
   * 初始化
   */
  ngOnInit() { 
    this.allData=this.data;
  }

  /**
   * 是否有子节点
   * @param item 
   */
  isLeaf(item:MenuData){
     return !item.children || !item.children.length;
  }

   /**
    * 点击
    * @param item 
    */
   itemClicked(item:MenuData){
     if(!this.isLeaf(item)) {
        for(let obj of this.data){
          if(obj.id!=item.id){
              obj.isExpend=false;
          } 
        }
        item.isExpend = !item.isExpend;
		 } 
  }

  /**
   * 查询菜单
   */
  searchMenu(){
    let tempData=this.allData;
    this.searchTxt=this.searchTxt.trim();
    this.searchMsgHidden=true;
    
    if(''!=this.searchTxt){
       let keyWord = new RegExp(this.searchTxt);
       let menuList=new Array<MenuData>();
       let menuIdList=new Array<string>();

       for(let item of tempData){
         this.searchItem(item,menuList,menuIdList,keyWord);
       }
       if(menuList.length>0){
          this.data=menuList;
       }else{
          this.searchMsgHidden=false;
       }
      
    }else{
       this.data=this.allData;
    }
  }

  /**
   * 查询子菜单
   * @param item 
   * @param menuList 
   */
  searchItem(item:MenuData,menuList:Array<MenuData>,menuIdList:Array<string>,keyWord:RegExp){
       item.isExpend=false;
       //关键字匹配，并且不在列表中的
       if((item.name.match(keyWord) || item.keyWord.match(keyWord)) && !this.checkSearchMenuIdExists(item.id,menuIdList)){
            menuList.push(item);
            this.pushSearchMenu(item,menuIdList);
       }
       
       //存在子菜单的，递归子菜单
       let itemChildren=item.children;
       if(itemChildren && itemChildren.length>0){
           for(let subItem of itemChildren){
              this.searchItem(subItem,menuList,menuIdList,keyWord);
           }
       }
      
  }

  /**
   * 添加查询的菜单
   * @param item 
   * @param menuIdList 
   */
  pushSearchMenu(item:MenuData,menuIdList:Array<string>){
       menuIdList.push(item.id);
       let itemChildren=item.children;
       if(itemChildren && itemChildren.length>0){
          for(let subItem of itemChildren){
             this.pushSearchMenu(subItem,menuIdList);
          }
       }
  }
  
  /**
   * 
   * @param id 检查菜单id是否存在
   * @param menuIdList 
   */
  checkSearchMenuIdExists(id,menuIdList:Array<string>){
      for(let menuId of menuIdList){
         if(menuId==id){
            return true;
         }
      }

      return false;
  }

  /**
   * 查询输入
   * @param event 
   */
  inputSearchTxt(event){
      this.searchTxt=event.target.value;
  }

  

}