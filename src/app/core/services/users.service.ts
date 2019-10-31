import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly USER_API = `${environment.serverApiUrl}/users`;

  constructor(private http: HttpClient) {}

  create(user: User): Observable<User> {
      return this.http.post<User>(`${this.USER_API}`, user);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.USER_API}/${id}`);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.USER_API}/${id}`, user);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<User>(`${this.USER_API}/${id}`);
  }

}
