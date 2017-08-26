import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

import { LoginComponent }      from './login/login.component';
import { MainComponent }   from './main/main.component';
import { PageNotFoundComponent } from './errorpage/page-not-found.component';



/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
     path: 'login',  
     component: LoginComponent
  },
  { 
     path: 'app',  
     component: MainComponent,
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


