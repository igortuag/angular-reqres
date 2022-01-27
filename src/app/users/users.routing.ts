import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "app/guard/auth.guard";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UsersComponent } from "./users.component";

const userRoutes = [
  { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: "users/:id",
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
];

export const UserRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(userRoutes);
