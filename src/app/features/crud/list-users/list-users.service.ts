import { Injectable, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  public users: User[];

  constructor(private usersService: UsersService) { this.fetchUsers(); }


  private fetchUsers(): void {
    this.usersService.getAll()
      .subscribe((users: User[]) => {
        this.users = users;
        users.forEach(user => { console.log(user); });
      });
  }
}
