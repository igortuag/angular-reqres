import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserRoutingModule } from "./users.routing";

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UsersComponent, UserDetailComponent],
  providers: [UsersService],
})
export class UsersModule {}
