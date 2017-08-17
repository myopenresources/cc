import { RouterModule, Routes } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleAddComponent } from './role-add.component';
import { RoleListComponent } from './role-list.component';

const routes: Routes = [
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


export const roleRoutes = RouterModule.forChild(routes);