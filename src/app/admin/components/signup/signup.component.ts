import { Component } from '@angular/core';
import {AdminService} from '../../admin.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  response:any;
  user ={
    name:'',
    email:'',
    password:''
  }
constructor(private AdminService: AdminService) { }
signup(){
  let flag = true;
  if(this.user.name =='' || this.user.name.length<2){
    flag = false;
    alert('Name is not Valid');
  }
  else if(this.user.email =='' || this.user.email.length<5 || !this.user.email.includes('@') || !this.user.email.includes('.')){
    alert('Please Enter a Valid Email');
    flag = false;
  }
  else if(this.user.password =='' && this.user.password.length<5){
    alert('Password Must be more then 5 Char long');
    flag = false;
  }

  if(flag){
     this.AdminService.signup(this.user).subscribe(response=>{this.response = response});
  }
}
}
