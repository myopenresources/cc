import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleAddComponent } from './role-add.component';
import { RoleListComponent } from './role-list.component';

const roleRoutes: Routes = [
    {
        path: '', component: RoleComponent,
        children: [
            {
                path:'roleAdd',
                component:RoleAddComponent
            },
            {
                path:'roleList',
                component:RoleListComponent
            }
        ]
    }
]




@NgModule({
  imports: [
    RouterModule.forChild(roleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoleRoutingModule { }