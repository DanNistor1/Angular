import { ListUsersComponent } from './list-users/list-users.component';
import { CrudComponent } from './crud.component';
import { NgModule } from '@angular/core';

import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FormUserComponent } from './form-user/form-user.component';


@NgModule({
  declarations: [
    CrudComponent,
    AddUserComponent,
    ListUsersComponent,
    FormUserComponent
  ],
  imports: [
    SharedModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
