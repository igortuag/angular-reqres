import { Component, OnInit } from "@angular/core";
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

  constructor() {}

  ngOnInit() {}

  login() {
    console.log("formLogin ::>>", this.formLogin);
  }
}
