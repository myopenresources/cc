import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmConfig} from './modal-model';

/**
 * 确认框组件
 */
@Component({
    selector : 'c-confirm',
    templateUrl : './confirm.component.html',
    encapsulation : ViewEncapsulation.None,
    styleUrls:['./confirm.component.scss']
})
export class ConfirmComponent {
    @Input()
    config: ConfirmConfig;

    constructor(public activeModal: NgbActiveModal) {}

    /**
     * 不同意
     */
    decline(): void {
       this.activeModal.dismiss({ status : 'declined' });
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
