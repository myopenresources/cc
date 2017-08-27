import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MainComponent }   from './main.component';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
      { path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule' },
      { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
      { path: 'role', loadChildren: 'app/role/role.module#RoleModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
