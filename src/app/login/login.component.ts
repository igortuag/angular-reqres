import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { FormLogin } from "./formLogin";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formLogin: FormLogin = {
    email: "",
    password: "",
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.formLogin);
  }

  ngOnInit() {}
}
