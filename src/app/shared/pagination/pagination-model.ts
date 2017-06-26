
/**
 * 分页操作类型
 */
export class PaginationType {
    public static PAGE_INIT: string = "pageInit"
    public static NEXT_PAGE: string = "nextPage";
    public static LAST_PAGE: string = "lastPage";
    public static PREVIOUS_PAGE: string = "previousPage";
    public static FRIST_PAGE: string = "fristPage"
    public static PAGE_SIZE_CHANGE: string = "pageSizeChange"

}

/**
 * 分页配置
 */
export class PaginationOptions {
    total?:any;
    pageList?:Array<number>;
    pageSize?:any;
    pageTotal?:any;
    pageNumber?:number;

}


/**
 * http分页method类型
 */
export class HttpPaginationMethod {
    public static POST: string = "post"
    public static GET: string = "get"; 
}
