import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { FormLogin } from "./formLogin";

@Injectable()
export class AuthService {
  changeSessionEmitter = new EventEmitter<boolean>();

  isLoggedIn: boolean = false;

  constructor(private http: Http, private router: Router) {}

  login(formLogin: FormLogin) {
    return this.http
      .post("https://reqres.in/api/login", {
        email: formLogin.email,
        password: formLogin.password,
      })
      .toPromise()
      .then((response) => {
        const data = response.json();
        localStorage.setItem("token", data.token);
        this.changeSessionEmitter.emit(true);
        this.router.navigate(["/users"]);
      })
      .catch((error) => {
        const errorData = error.json();
        window.alert(`Login fail ${errorData.error}`);
      });
  }

  isLogged() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
    this.changeSessionEmitter.emit(false);
  }
}
