import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { HttpService } from '../shared/http/http.service';

import { ToastService } from '../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../shared/toast/toast-model';
import { CustomValidators } from '../shared/custom-validator/custom-validator';
import { UserBusinessService} from '../business-service/user/user-business.service';
import { Utils } from "../shared/util/utils";




@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private toastService: ToastService, 
    private httpService: HttpService,
    private userBusinessService:UserBusinessService,
    private formBuilder: FormBuilder) {
    let userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));

    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }


  /**
   * 登录
   */
  login() {
   /* if (this.loginForm.valid) {
      let that = this;
      this.httpService.post(this.userBusinessService.login(), {
        userName:  this.loginForm.controls['userName'].value,
        password:  this.loginForm.controls['password'].value
      }, function (successful, data, res) {
        if (successful && Utils.resultSuccess(data.resultType)) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.resultMsg, 3000);
          that.toastService.toast(toastCfg);
          that.router.navigate(['/app/home']);
        }else if(successful && Utils.resultFailure(data.resultType)){
          const toastCfg = new ToastConfig(ToastType.WARNING, '', data.resultMsg, 3000);
          that.toastService.toast(toastCfg);
        }else{
          const toastCfg = new ToastConfig(ToastType.ERROR, '', data.resultMsg, 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         that.toastService.toast(toastCfg);
      });

    }*/
    
    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '登录成功！', 3000);
    this.toastService.toast(toastCfg);
    this.router.navigate(['/app/home']);
  }


}