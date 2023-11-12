import { UsersService } from './users/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'proyecto-final';

  constructor(private usersService: UsersService, private route: Router){}

  hayLogin:boolean = this.usersService.userActive;

  isLoggedIn(): boolean{
    return localStorage.getItem('token') !== null;
  }

  logout(): void{
    setTimeout(() => {
      this.route.navigate(["/"])
    }, 500);
    alert("Logout realizado con éxito")
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }



}
