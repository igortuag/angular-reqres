import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { routing } from "./app.routing";
import { AuthService } from "./login/auth.service";
import { UsersService } from "./users/users.service";

@NgModule({
  declarations: [AppComponent, LoginComponent, UsersComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [AuthService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
