import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UsersComponent } from "./users/users.component";

const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

export const AppRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
