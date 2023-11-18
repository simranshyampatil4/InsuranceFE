import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      // Handle login form submission
      console.log('Login Form Submitted:', this.loginForm.value);
    } else {
      // Form is invalid, show error messages or take appropriate action
      console.log('Invalid Form');
    }
  }

  navigateToRegister() {
    // Navigate to register page
    this.router.navigate(['/register']);
  }
}
