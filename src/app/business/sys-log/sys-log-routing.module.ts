import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SysLogComponent }   from './sys-log.component';


const sysLogRoutes: Routes = [
  {
    path: '',
    component: SysLogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sysLogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SysLogRoutingModule { }
