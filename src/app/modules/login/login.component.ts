import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import {ToastService} from '../shared/toast/toast.service';
import {ToastConfig,ToastType} from '../shared/toast/toast-model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  /**
   * 初始化
   */
  ngOnInit() {

  }

  constructor(private router: Router,private toastService: ToastService) {}


  
  /**
   * 登录
   */
  login(){
    const toastCfg = new ToastConfig(ToastType.SUCCESS,'百变小咖，登录成功!','', 3000);
    this.toastService.toast(toastCfg);
    this.router.navigate(['/app/home']);
  }

  
}