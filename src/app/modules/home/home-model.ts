/**
 * 待办对象数据
 */
export class TaskObjData {
   total:number;
   taskList:Array<TaskData>;
}

/**
 * 待办数据
 */
export class TaskData{
   id:number;
   title:string;
   submitUser:string;
   createDate:string;
}

/**
 * 通知对象数据 
 */
export class NoticeObjData {
   total:number; 
   noticeList:Array<NoticeData>;
}


/**
 * 通知数据 
 */
export class NoticeData {
   id:number;
   title:string;
   createDate:string;
}


