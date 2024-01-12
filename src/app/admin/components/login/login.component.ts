import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {AdminService} from '../../admin.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  response:any;
  userlogin = {
    email:'',
    password:''
  }
  constructor(public AdminService:AdminService){}
  login(){
   this.AdminService.login(this.userlogin).subscribe(response=>{this.response = response; localStorage.setItem('Accesstoken',this.response.access_token)})
  }
}
