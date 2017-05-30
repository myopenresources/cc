/**
 * 待办数据
 */
export class TodoData{
   //id
   id:number;
   //标题
   title:string;
   //提交人
   submitUser:string;
   //创建时间
   createDate:string;
}

/**
 * 待办对象数据
 */
export class TodoObjData {
   //总条数
   total:number;
   //列表
   todoList:Array<TodoData>;
}

/**
 * 待阅数据
 */
export class NeedReadData{
   //id
   id:number;
   //标题
   title:string;
   //类型
   type:string;
   //创建时间
   createDate:string;
}

/**
 * 待阅对象数据
 */
export class NeedReadObjData {
    //总条数
   total:number;
   //列表
   needReadList:Array<NeedReadData>;
}


/**
 * 通知数据 
 */
export class NoticeData {
   //id
   id:number;
   //标题
   title:string;
   //创建时间
   createDate:string;
}

/**
 * 通知对象数据 
 */
export class NoticeObjData {
   //总条数
   total:number; 
   //列表
   noticeList:Array<NoticeData>;
}



/**
 * 通知数据 
 */
export class CommonFuncData {
    //ID
   id:string;
    //名称
   name:string;
   //图标
   icon:string;
   //URL
   url?:string;
}












