/**
 * 菜单数据
 */
export class TreeData{

   //ID
   id:string;

   //父ID
   parentId:string;

   //名称
   name:string;

   //关键字
   keyWord:string;

   //图标
   icon:string;

   //是否展开
   isExpend?:boolean=false;
   
   //是否选中
   isChecked?:boolean=false;

   //属性
   attr?:any;

   //子节点
   children?:Array<TreeData>;

}