import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './home.component';

/**
 * 主页路由
 */
const homeRoutes: Routes = [
    { path: '', component: HomeComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }