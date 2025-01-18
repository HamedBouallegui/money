import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { PlansComponent } from './plans/plans.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PaimentComponent } from './profile/paiment/paiment.component';
import { PasswordComponent } from './profile/password/password.component';
import { AccountComponent } from './profile/account/account.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    PlansComponent,
    BlogComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    PaimentComponent,
    PasswordComponent,
    AccountComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ensure AppRoutingModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }