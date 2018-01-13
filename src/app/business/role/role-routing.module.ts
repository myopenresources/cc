import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDistributeComponent } from './role-distribute/role-distribute.component';

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
            },
            {
                path:'roleDistribute',
                component:RoleDistributeComponent
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