//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//Third-party
import { ToastrService } from 'ngx-toastr';
//Custom Validator
import { CustomValidator } from '../shared/custom-validator/custom-validator';
//Service
import { AuthService } from './service/auth.service';
//Model
import { LoginResponse } from './login-model/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidator.cannotContainSpace]]
    });
  }

  onClickSubmit(): void {
    this.loading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const grant_type = 'password';

    this.authService.login({ grant_type, email, password })
      .subscribe({
        next: (response: LoginResponse) => {
          if (response.access_token) {
            console.log('Login successful:', response);
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('refreshtoken', response.refresh_token);
            localStorage.setItem('expirytime',response.expires_in.toString());
            this.router.navigate(['/customer']);
            this.toastrService.success('Login successful', 'Success');
          }
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.toastrService.error('Invalid credentials', 'Error');
          this.loading = false;
        },
      });
  }

}