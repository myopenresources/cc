import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from '../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../shared/toast/toast-model';

/**
 * 修改密码组件
 */
@Component({
    selector: 'c-password-edit',
    templateUrl: './password-edit.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PasswordEditComponent {


    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {
       
    }

    /**
     * 上传
     */
    ok(): void {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改密码成功!', 2000);
        this.toastService.toast(toastCfg);
        this.close();
    }

    /**
       * 关闭
       */
    close(): void {
        this.activeModal.dismiss({ status: 'closed' });
    }


}
