import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userForm: IUser = {
    address: {
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
      firstname: "",
      lastname: ""
    },
    phone: 0,
    __v: 0
  };

  constructor(private usersService: UsersService, private route: Router){}

  onSubmit(): void {
    console.log("Info de registro: ", this.userForm);


    this.usersService.addUser(this.userForm as IUser).subscribe((e: IUser) => {
      setTimeout(() => {
        this.route.navigate(["/login"])
      }, 500);

      alert("Registro Completado.\nRedirigiendo a la página de login")
      console.log("El registro se ha hecho correctamente", e);
    },
    (error) => {
      console.error("Tienes un error. Arreglalo anda: ", error)
    })
  }

}
