import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignup = false; // Controls the toggle state

  toggleSignup() {
    this.isSignup = !this.isSignup;
  }
}
