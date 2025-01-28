import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  email: string = ''; // store the value
  password: string = ''; 

  onSubmit() {
    console.log('Login form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add logic to handle login (e.g., authentication service)

    this.router.navigate(['/userlist']);
  }
}
