//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomValidator } from '../shared/custom-validator/custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ){}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
   this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,CustomValidator.cannotContainSpace]],
      password: ['',[Validators.required, CustomValidator.cannotContainSpace]]
    });
  }

}