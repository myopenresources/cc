import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertConfig} from './modal-model';

/**
 * 确认框
 */
@Component({
    selector : 'alert',
    templateUrl : './alert.component.html',
    encapsulation : ViewEncapsulation.None
})
export class AlertComponent {
    @Input()
    config: AlertConfig;

    constructor(public activeModal: NgbActiveModal) {}

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
