import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  s/**
   * 初始化
   */
  ngOnInit() {

  }

  constructor(private router: Router) {
      
  }
  
  /**
   * 登录
   */
  login(){
      this.router.navigate(['/app/home']);
  }
  
}