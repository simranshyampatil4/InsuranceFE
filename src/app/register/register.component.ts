import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      newUsername: ['', [Validators.required, Validators.minLength(3)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      // Check if passwords match
      const password = (this.registerForm.get('newPassword') as FormControl).value;
      const confirmPassword = (this.registerForm.get('confirmPassword') as FormControl).value;


      if (password !== confirmPassword) {
        // Passwords do not match, handle accordingly
        console.log('Passwords do not match');
        return;
      }

      // Handle register form submission
      console.log('Register Form Submitted:', this.registerForm.value);
      // After successful registration, navigate to login page
      this.router.navigate(['/login']);
    } else {
      // Form is invalid, show error messages or take appropriate action
      console.log('Invalid Form');
    }
  }

  navigateToLogin() {
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
