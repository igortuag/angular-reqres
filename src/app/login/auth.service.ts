import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { FormLogin } from "./formLogin";

@Injectable()
export class AuthService {
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
        this.router.navigate(["/users"]);
      })
      .catch((error) => {
        const errorData = error.json();
        window.alert(`Login fail ${errorData.error}`);
      });
  }
}
