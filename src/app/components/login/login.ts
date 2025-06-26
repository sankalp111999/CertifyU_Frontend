import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  rememberMe = false;
  showError = false;

  login() {
    if (this.username === 'user' && this.password === 'pass') {
      alert('Login Success!');
    } else {
      this.showError = true;
    }
  }
}
