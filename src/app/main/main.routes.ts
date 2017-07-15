import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

/**
 * 主体路由
 */
const routes: Routes = [
      { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
      { path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule'},
      { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];

export const mainRoutes = RouterModule.forChild(routes);
