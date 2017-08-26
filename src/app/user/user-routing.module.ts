import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';

const userRoutes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            {
                path:'userAdd',
                component:UserAddComponent
            },
            {
                path:'userList',
                component:UserListComponent
            }
        ]
    }
]


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }