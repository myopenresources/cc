import { NgModule,OnInit }             from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

import  { HomeComponent }      from '../home/home.component';

const mainRoutes: Routes = [
      {
           path: 'home',  
           component: HomeComponent
      }
];

export const mainRouting=RouterModule.forChild(mainRoutes);
