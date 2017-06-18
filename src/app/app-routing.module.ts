import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './modules/login/login.component';
import { MainComponent }   from './modules/main/main.component';

/**
 * app路由
 */
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
     path: 'login',  
     component: LoginComponent
  },
  { 
     path: 'app',  
     component: MainComponent,
     loadChildren: 'app/modules/main/main.module#MainModule'
  }
];

export const appRouting=RouterModule.forRoot(routes);


