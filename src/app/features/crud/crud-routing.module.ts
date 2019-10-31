import { FormUserComponent } from './form-user/form-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'list-user', component: ListUsersComponent},
  {path: 'form-user', component: FormUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
