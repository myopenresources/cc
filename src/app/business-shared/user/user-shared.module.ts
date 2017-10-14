import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ng2-img-cropper';
import  { ImgCropperSelectModule}       from '../../shared/img-cropper-select/img-cropper-select.module';

import { AvatarCropperComponent} from './avatar-cropper.component';
import { PasswordEditComponent} from './password-edit.component';



/**
 * 用户共享模块
 */
@NgModule({
  imports:      [
     NgbModule,
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     ImageCropperModule,
     ImgCropperSelectModule
  ],
  declarations: [
     AvatarCropperComponent,
     PasswordEditComponent
  ],
  entryComponents:[AvatarCropperComponent,PasswordEditComponent],
  exports:      [],
  providers:    []
})
export class UserSharedModule {
}
