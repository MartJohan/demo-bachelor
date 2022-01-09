import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private readonly router: Router) { }

  /**
   * handles users request to login
   * 
   * Note: There should of course be some kind of validation here to check the input of the user, but it is not needed for this example
   */
  handleLoginClick() {
    // This is bad, do not make login like this
    sessionStorage.setItem("loggedIn", "yes");
    this.router.navigate(['/home']);
  }
}
