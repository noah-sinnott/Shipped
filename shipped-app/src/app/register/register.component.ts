import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = this.formBuilder.group({
    firstName:["", Validators.required],
    lastName: "",
    email: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(3)]]
  })

    constructor(private formBuilder: FormBuilder, private ApiService: ApiService, private router: Router) { }

   ngOnInit(): void {
    
   }
  
  
    async handleSubmit () {
    await this.ApiService.createUser(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.firstName, this.registerForm.value.lastName).subscribe((data) => this.handleRes(data))
    this.registerForm.reset();
  }
  
  handleRes(data: any) {
    if (data.status == 'created') {
      this.router.navigate(['login'])
    } else {
      window.alert("Email already exists")
    }
  }

  sendToLogin() {
    this.router.navigate(['login'])
  }
  


}
