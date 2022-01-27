import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersComponent, UserDetailComponent],
  providers: [UsersService],
})
export class UsersModule {}
