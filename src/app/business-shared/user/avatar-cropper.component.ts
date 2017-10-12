import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';

import { ToastService } from '../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../shared/toast/toast-model';

/**
 * 头像更换组件
 */
@Component({
    selector: 'c-avatar-cropper',
    templateUrl: './avatar-cropper.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls:['./avatar-cropper.component.scss']
})
export class AvatarCropperComponent {

    //用户头像
    userAvatar: string = "./assets/img/user-header.png";

    //头像
    avatar: any;
    //头像裁剪配置
    avatarSettings: CropperSettings;
    //头像裁剪元素
    @ViewChild('avatarCropper', undefined)
    avatarCropper: ImageCropperComponent;

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {
        //头像裁剪配置
        this.avatarSettings = new CropperSettings();
        this.avatarSettings.noFileInput = true;
        this.avatarSettings.width = 120;
        this.avatarSettings.height = 120;
        this.avatarSettings.croppedWidth = 120;
        this.avatarSettings.croppedHeight = 120;
        this.avatarSettings.canvasWidth = 600;
        this.avatarSettings.canvasHeight = 380;
        this.avatarSettings.minWidth = 100;
        this.avatarSettings.minHeight = 100;
        this.avatarSettings.cropperDrawSettings.strokeWidth = 2;
        this.avatarSettings.rounded = true;
        this.avatarSettings.fileType = 'image/png';
        this.avatar = {};
    }

    /**
     * 上传
     */
    upload() {
        console.info(this.avatar.image);
        this.userAvatar=this.avatar.image;
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '图片上传成功!', 2000);
        this.toastService.toast(toastCfg);
    }

    /**
       * 关闭
       */
    close(): void {
        this.activeModal.dismiss({ status: 'closed' });
    }


}
