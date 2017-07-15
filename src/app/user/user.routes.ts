import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
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


export const userRoutes = RouterModule.forChild(routes);