import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";

const userRoutes = [{ path: "users", component: UsersComponent }];

export const UserRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(userRoutes);
