/**
 * 层次图节点
 */
export class HierarchyViewNode{
    //ID
    id:string;

    //名称
    name:string;

    //图标
    icon?:string;

    //样式
    cls?:string;

    //子节点
    children?:Array<HierarchyViewNode>;

    //单击启用
    clickEnable?:boolean=true;
}

/**
 * 层次图数据
 */
export class HierarchyViewData{
     total:number;
     rows:Array<HierarchyViewNode>;
}

