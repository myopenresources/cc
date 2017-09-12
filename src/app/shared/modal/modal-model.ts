/**
 * 确认框配置
 */
export class ConfirmConfig{
     content:string;
     declineBtnCls:string;
     declineBtnTxt:string;
     approveBtnCls:string;
     approveBtnTxt:string;
   
    constructor(content:string='',declineBtnCls:string='btn-light',declineBtnTxt:string='取消',approveBtnCls:string='btn-primary',approveBtnTxt:string='确定'){
        this.content=content;
        this.declineBtnCls=declineBtnCls;
        this.declineBtnTxt=declineBtnTxt;
        this.approveBtnCls=approveBtnCls;
        this.approveBtnTxt=approveBtnTxt;
    }
    
    
    getContent(): string {
        return this.content;
    }

    getdeclineBtnCls():string{
       return this.declineBtnCls;
    }

    getDeclineBtnTxt():string{
       return this.declineBtnCls;
    }

    getApproveBtnCls():string{
       return this.approveBtnCls;
    }

    getApproveBtnTxt():string{
       return this.approveBtnTxt;
    }

}

/**
 * 警告框类型
 */
export enum AlertType {
   INFO, WARNING, ERROR
}


/**
 * 警告框配置
 */
export class AlertConfig{
     title:string;
     content:string;
     type:AlertType;
     approveBtnCls:string;
     approveBtnTxt:string;
   
    constructor(type:AlertType=AlertType.WARNING,title:string='',content:string='',approveBtnCls:string='btn-primary',approveBtnTxt:string='确定'){
        this.title=title;
        this.content=content;
        this.type=type;
        this.approveBtnCls=approveBtnCls;
        this.approveBtnTxt=approveBtnTxt;
    }
    
    getType(): AlertType {
        return this.type;
    }

    getTitle(): string {
        return this.title;
    }
    
    getContent(): string {
        return this.content;
    }

    getApproveBtnCls():string{
       return this.approveBtnCls;
    }

    getApproveBtnTxt():string{
       return this.approveBtnTxt;
    }

}