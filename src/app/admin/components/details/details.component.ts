import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {AdminService} from '../../admin.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
email:any
response:any
constructor(
  public AdminService: AdminService){}

details(){
  this.AdminService.details(this.email).subscribe(response =>{this.response = response;});
}

}
