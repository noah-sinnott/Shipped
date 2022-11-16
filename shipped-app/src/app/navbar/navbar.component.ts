import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {email, password, setEmail, setPassword } from '../global/global.module'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  password: any = password
  email: any = email
  
  ngOnInit(): void {
  }
  
  logout() {
    setEmail(false)
    setPassword(false)
    this.router.navigate(['login'])
  }

}
