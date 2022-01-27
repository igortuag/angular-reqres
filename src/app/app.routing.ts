import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";

const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UsersComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
