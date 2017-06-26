/**
 * 主数据
 */
export class MainData {
  //用户数据
  userData:UserData;
 
  //菜单数据
  menuData: Array<MenuData>;

}

/**
 * 用户数据
 */
export class UserData {
  //用户名
  userName: string;

  //头像
  userAvatar:string;

  //手机
  mobilePhone:string;

  //邮箱
  email:string;

  //岗位
  positions:string;
}

/**
 * 菜单数据
 */
export class MenuData{

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
   isExpend?:boolean;

   //URL
   url?:string;

   //子节点
   children?:Array<MenuData>;

}


