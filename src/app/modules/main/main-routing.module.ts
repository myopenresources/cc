import { NgModule,OnInit }             from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

import  { HomeComponent }      from '../home/home.component';

//demo
import {ToastDemoComponent} from '../demo/toast-demo.component'
import {ModalDemoComponent} from '../demo/modal-demo.component'



const mainRoutes: Routes = [
      {
           path: 'home',  
           component: HomeComponent
      },
      {
           path:'toastDemo',
           component:ToastDemoComponent
      },
      {
           path:'modalDemo',
           component:ModalDemoComponent
      }
];

export const mainRouting=RouterModule.forChild(mainRoutes);
