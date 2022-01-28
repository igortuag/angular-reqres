import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "./login/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isLogged: boolean = false;

  navListNonLogged = [
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

  navList = [];

  constructor(private authService: AuthService) {}

  changeMenuLinks(isLogged: boolean) {
    if (isLogged) {
      this.navList = this.navListLogged;
    } else {
      this.navList = this.navListNonLogged;
    }
  }

  ngOnInit() {
    this.subscription = this.authService.changeSessionEmitter.subscribe(
      (isLogged) => {
        this.isLogged = isLogged;
        this.changeMenuLinks(isLogged);
      }
    );

    this.isLogged = this.authService.isLogged();
    this.changeMenuLinks(this.authService.isLogged());
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
