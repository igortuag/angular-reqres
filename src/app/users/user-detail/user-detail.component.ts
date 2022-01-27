import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { User } from "../user";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.usersService.getUser(this.id).then((user) => {
        if (user) {
          this.user = user;
          return;
        }
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
