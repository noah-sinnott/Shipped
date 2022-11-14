import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';
import {email, password, setEmail, setPassword } from '../global/global.module'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  

export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(3)]]
  });

  constructor(private formBuilder: FormBuilder, private ApiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    
  }

  
  async handleSubmit() {
    await this.ApiService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => this.handleRes(data));
    this.loginForm.reset();
  }
  
  handleRes(data: any) {
    if (data.status == 'log in') {
      setEmail(data.email)
      setPassword(data.password);
      this.router.navigate(['']);
    } else {
      window.alert("Email or password is incorrect");
    }
  }

  register() {
    this.router.navigate(['register']);
  }
}
