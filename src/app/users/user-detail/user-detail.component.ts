
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { ActivatedRoute, Route } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  botonActualizar: boolean = false;
  toggleButton(){
    this.botonActualizar = !this.botonActualizar;
  }

  userForm: IUser = {
    address:{
      geolocation: {
        lat: 0,
        long: 0
      },
      city: "",
      street: "",
      number: 0,
      zipcode: 0
    },
    id: 0,
    email: "",
    username: "",
    password: "",
    name: {
      firstname:"",
      lastname: ""
    },
    phone: 0,
    __v: 0
  };

  userId: number = 0;


  constructor(private usersService: UsersService, private route: ActivatedRoute){}






  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.usersService.getUserById(userId).subscribe(user => {
        user.address.geolocation.lat = +user.address.geolocation.lat;
        user.address.geolocation.long = +user.address.geolocation.long;
        this.userForm = user
      })
    })
  }

  getUserToUpdate(userId: number): void{
    this.usersService.getUserById(userId).subscribe((user: IUser) => {
      user.address.geolocation.lat = +user.address.geolocation.lat;
      user.address.geolocation.long = +user.address.geolocation.long;
      this.userForm = user;
    })
  }

  updateUserDetails(): void {
    this.usersService.updateUser(this.userForm).subscribe((e: IUser) => {
      console.log("Tus datos han sido modificados: ", e);
    })
  }

}
