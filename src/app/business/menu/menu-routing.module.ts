import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu.component';

const menuRoutes: Routes = [
    {
        path: '', component: MenuComponent,
        children: [
            {
                path:'menuAdd',
                component:MenuAddComponent
            },
            {
                path:'menuList',
                component:MenuListComponent
            }
        ]
    }
]




@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule { }