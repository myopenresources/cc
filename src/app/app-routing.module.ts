import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

import { PageNotFoundComponent } from './error-page/page-not-found.component';



/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
     path: 'login',  
     loadChildren: 'app/login/login.module#LoginModule'
  },
  { 
     path: 'app',  
     loadChildren: 'app/main/main.module#MainModule'
  },{
     path:'**',
      component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes,{preloadingStrategy: SelectivePreloadingStrategy,useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


