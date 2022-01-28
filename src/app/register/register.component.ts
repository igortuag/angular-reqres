import { Component, OnInit } from "@angular/core";
import { RegisterService } from "app/register/register.service";
import formRegister from "./formRegister";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  formRegister: formRegister = {
    email: "",
    password: "",
  };

  constructor(private registerService: RegisterService) {}

  ngOnInit() {}

  register() {
    this.registerService.register(this.formRegister);
  }
}
