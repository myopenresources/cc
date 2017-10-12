import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertConfig,AlertType} from './modal-model';


/**
 * 警告框组件
 */
@Component({
    selector : 'c-alert',
    templateUrl : './alert.component.html',
    encapsulation : ViewEncapsulation.None,
    styleUrls:['./alert.component.scss']
})
export class AlertComponent {
    @Input()
    config: AlertConfig;

    constructor(public activeModal: NgbActiveModal) {}

    /**
     * 判断是否信息
     * @param type 
     */
    isInfo(type) {
        return type === AlertType.INFO;
    }

    /**
     * 判断是否警告
     * @param type 
     */
    isWarning(type) {
        return type === AlertType.WARNING;
    }

     /**
     * 判断是否错误
     * @param type 
     */
    isError(type) {
        return type === AlertType.ERROR;
    }

    /**
     * 关闭
     */
    close(): void {
       this.activeModal.dismiss({ status : 'closed' });
    }

    /**
     * 同意
     */
    approve(): void {
        this.activeModal.close({ status : 'approved' });
    }
}
