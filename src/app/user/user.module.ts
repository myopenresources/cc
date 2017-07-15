import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { userRoutes } from './user.routes';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';


@NgModule({
  imports: [
    userRoutes,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  declarations: [
    UserComponent,
    UserAddComponent,
    UserListComponent
  ],
  exports: [
  ],
  providers: []
})
export class UserModule { }
