import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app.routing";
import { AuthService } from "./login/auth.service";
import { UsersService } from "./users/users.service";
import { UsersModule } from "./users/users.module";
import { AuthGuard } from "./guard/auth.guard";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
