import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  signup(user:any){
    return this.http.post('http://localhost:8081/curd/frontend',user);
  }

  login(user:any){
    return this.http.post('http://localhost:8081/auth/login',user);
  }

  details(email:any){
    let config = {
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('Accesstoken')
      }
    };
    return this.http.post('http://localhost:8081/curd/details',{email:email},config);
  }
}
