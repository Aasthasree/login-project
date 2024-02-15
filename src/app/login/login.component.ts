//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Custom Validator
import { CustomValidator } from '../shared/custom-validator/custom-validator';
//Service
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, CustomValidator.cannotContainSpace]]
    });
  }

  onClickSubmit(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const grant_type = 'password';

    this.authService.login({ grant_type, username, password })
      .subscribe({
        next: (response) => {
          if (response.access_token) {
            console.log('Login successful:', response);
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

}