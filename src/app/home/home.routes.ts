import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

/**
 * 主页路由
 */
const routes: Routes = [
    { path: '', component: HomeComponent }
]


export const homeRoutes = RouterModule.forChild(routes);