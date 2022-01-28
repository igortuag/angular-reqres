import { Injectable } from "@angular/core";
import formRegister from "./formRegister";

@Injectable()
export class RegisterService {
  constructor() {}

  register(form: formRegister) {
    console.log("register ::>>", form);
  }
}
