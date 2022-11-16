import { Injectable } from '@angular/core';
import {email} from '../global/global.module'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
isAuthenticated(){
    return email;
  }
}