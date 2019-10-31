import { ListUsersComponent } from './../list-users/list-users.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';
import { ListUsersService } from '../list-users/list-users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  public users: User[];
  public user: any;
  flag1 = true;
  flag2 = true;

  registrationForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  public getUsers(): void {
    this.user = '';
    this.flag1 = false;
    this.flag2 = true;
    this.usersService.getAll()            // observable User[]
      .subscribe((users: User[]) => {
        this.users = users;              // save users
        // users.forEach(user => { console.log(user); }); // test
      });
  }

  //  injectand private listUsersService: ListUsersService datele sunt citite
  //  o singura data din fisierul json si nu se mai reactualizeaza
  //
  // public getUsers(): void {
  //   this.users = this.listUsersService.users;
  // }

  public getUserById(id: number): void {
    this.users = [];
    this.flag1 = true;
    this.flag2 = false;
    // console.log(id); // test
    this.usersService.get(id)
      .subscribe(user => {
        this.user = user;
        this.registrationForm.setValue({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password
        });
        // console.log(user); // test
      });
  }

  public updateUserById(id: number, user: User): void {
    // console.log(user); // test
    this.usersService.update(id, user)
      .subscribe();
    this.onCancel();
  }

  public addUser(user: User): void {
    // console.log(user); // test
    this.usersService.create(user)
      .subscribe();
    this.onCancel();
  }

  public deleteUserById(id: number): void {
    // console.log(id); // test
    this.usersService.delete(id)
      .subscribe();
    this.onCancel();
  }

  public clear(): void {
    this.users = [];
    this.user = '';
    this.flag1 = true;
    this.flag2 = true;
  }

  public onCancel(): void {
    this.registrationForm.setValue({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

}
