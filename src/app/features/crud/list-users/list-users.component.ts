import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { ListUsersService } from './list-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit {

  public users: User[];

  constructor(private listUsersService: ListUsersService) { }

  ngOnInit() {
    this.users = this.listUsersService.users;
  }

}
