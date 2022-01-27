import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";

@NgModule({
  imports: [CommonModule],
  declarations: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule {}
