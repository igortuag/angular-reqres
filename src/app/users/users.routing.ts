import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UsersComponent } from "./users.component";

const userRoutes = [
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserDetailComponent },
];

export const UserRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(userRoutes);
