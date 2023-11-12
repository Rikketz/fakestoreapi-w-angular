import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // url: string = "https://fakestoreapi.com/users";
  url: string = "http://localhost:3000/users";

  // urlLogin: string = "https://fakestoreapi.com/users";
  urlLogin: string = "http://localhost:3000/users";

  userActive: boolean = false;

  constructor(private httpClient: HttpClient) { }

  addUser(e: IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(this.url, e);
  }

  getAllUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url);
  }

  login(username: string, password: string): Observable<{ id: any, token: string }> {
    const body = { username, password };
    return this.httpClient.post<{ id: any, token: string }>(`${this.url}`, body);
  }

  getUserById(id:number): Observable<IUser>{
    return this.httpClient.get<IUser>(this.url + `/${id}`)
  }

  updateUser(e: IUser): Observable<IUser>{
    return this.httpClient.put<IUser>(this.url + `/${e.id}`, e)
  }

  deleteUser(id:number): Observable<IUser>{
    return this.httpClient.delete<IUser>(this.url + `/${id}`)
  }




}
