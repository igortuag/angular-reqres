import { Component, OnInit } from "@angular/core";
import { AuthService } from "./login/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isLogged: boolean = false;

  navList = [
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];

  navListLogged = [
    {
      name: "Users",
      path: "/users",
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLogged = this.authService.isLogged();

    if (this.isLogged) {
      this.navList = this.navListLogged;
    }
  }
}
