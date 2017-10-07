import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';
import { UserInfoComponent} from './user-info.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    PaginationModule
  ],
  declarations: [
    UserComponent,
    UserAddComponent,
    UserListComponent,
    UserInfoComponent
  ],
  exports: [
  ],
  providers: []
})
export class UserModule { }
