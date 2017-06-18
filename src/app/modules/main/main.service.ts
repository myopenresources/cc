import { Injectable,EventEmitter } from '@angular/core';


/**
 * 主体服务
 */
@Injectable()
export class MainService {
    //标题
    changeTitle:EventEmitter<string>;

    constructor() {
        this.changeTitle = new EventEmitter();
    }

    


}