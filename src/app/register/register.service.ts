import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import formRegister from "./formRegister";

@Injectable()
export class RegisterService {
  constructor(private http: Http, private router: Router) {}

  register(form: formRegister) {
    return this.http
      .post("https://reqres.in/api/register", {
        email: form.email,
        password: form.password,
      })
      .toPromise()
      .then((response) => {
        const data = response.json();
        localStorage.setItem("token", data.token);
        this.router.navigate(["/users"]);
      })
      .catch((error) => {
        const errorData = error.json();
        window.alert(`Register fail ${errorData.error}`);
      });
  }
}
