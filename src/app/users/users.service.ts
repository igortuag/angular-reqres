import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./User";

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getUsers() {
    return this.http
      .get("https://reqres.in/api/users")
      .toPromise()
      .then((response) => {
        const { data } = response.json() as { data: User[] };
        return data;
      })
      .catch((error) => {
        console.log("ERRROR::>>", error);
      });
  }
}
