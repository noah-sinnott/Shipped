import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
  
export class ApiService {

  constructor(private http:HttpClient) { }

  getInfo(password: String, email: String): Observable<any[]> {
    const options = {
        "email": email, 
    "password": password
};
    return this.http.post<any[]>('http://localhost:3001/getTracking', options);
  }





  createUser(email: any, password: any, firstName: any, lastName: any): Observable<any[]> {
    const options = {
      
        "email": email,
        "password": password,
        "fn": firstName,
        "ln": lastName
      
    }

 return this.http.post<any>(`http://localhost:3001/user`, options);
  }
  



  addTrack(carrier: any, code: any, password: any, email: any): Observable<any[]> {
    const options = {
     
      "carrier": carrier,
        "code": code, 
        "email": email, 
    "password": password
  
};
    return this.http.post<any>(`http://localhost:3001/track`, options);
  }



login(email: any, password: any): Observable<any[]> {
    const options = {
      
        "email": email,
        "password": password
      
    }
 return this.http.post<any>(`http://localhost:3001/login`, options);
  }

}
