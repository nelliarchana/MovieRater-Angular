import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ApiService} from '../api.service';
import { CookieService} from 'ngx-cookie-service';
import { from } from 'rxjs';
import { Router} from '@angular/router';
interface Tokenobj {
  token :string ;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })
  registerMode=false;
  constructor(
    private apiService:ApiService,
    private cookieService:CookieService,
    private router :Router
  ) { }

  ngOnInit(){
    const mrToken =this.cookieService.get('mr-token');
    console.log(mrToken);
    if(mrToken){
      this.router.navigate(['/movies']);
    }
  }
  saveForm(){
    if(!this.registerMode)
    {
      this.lloginUser()
    }else{
      this.apiService.registerUser(this.authForm.value).subscribe(
        result=>{
          this.lloginUser();
        },
        error=>console.log(error)
      );
    }
  }
    lloginUser(){
      this.apiService.loginUser(this.authForm.value).subscribe(
        (result:Tokenobj)=>{
          this.cookieService.set("mr-token",result.token);
          this.router.navigate(['/movies']);
  
        },
        error=>console.log(error)
      );
    }
    
  
}
